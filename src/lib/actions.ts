'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { loginSchema, parentRegisterSchema } from '@/lib/validation/auth';

export async function loginAction(formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const supabase = await createClient();
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (authError || !authData.user) {
    return { error: 'Invalid email or password' };
  }

  // Determine user role for redirection
  const { data: roleRecord } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', authData.user.id)
    .single();

  const role = (roleRecord as { role?: string } | null)?.role;

  if (role === 'admin') redirect('/admin/dashboard');
  if (role === 'school') redirect('/school-admin/dashboard');
  redirect('/parent/dashboard');
}

export async function registerParentAction(formData: FormData) {
  const parsed = parentRegisterSchema.safeParse({
    fullName: formData.get('fullName'),
    mobile: formData.get('mobile'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const { fullName, mobile, email, password } = parsed.data;
  const supabase = await createClient();
  const adminClient = createAdminClient();

  // 1. Create user in Supabase Auth
  const { data: authData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, mobile },
    },
  });

  if (signUpError || !authData.user) {
    return { error: signUpError?.message || 'Failed to complete registration' };
  }

  const userId = authData.user.id;

  // 2. Provision profiles, role, and parent profile records using admin client
  try {
    await adminClient.from('profiles').insert({
      id: userId,
      full_name: fullName,
      mobile,
      email,
    });

    await adminClient.from('user_roles').insert({
      user_id: userId,
      role: 'parent',
    });

    await adminClient.from('parent_profiles').insert({
      id: userId,
    });
  } catch (err: any) {
    return { error: 'Account created, but failed to initialize profile. Please contact support.' };
  }

  redirect('/parent/dashboard');
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}