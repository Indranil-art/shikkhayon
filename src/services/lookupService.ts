import { createClient } from '@/lib/supabase/server';
import { Database } from '@/types/database';

type Board = Database['public']['Tables']['boards']['Row'];
type SchoolClass = Database['public']['Tables']['classes']['Row'];
type Facility = Database['public']['Tables']['facilities']['Row'];

export async function getBoards(): Promise<Board[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('boards')
    .select('*')
    .eq('is_active', true)
    .order('code');

  if (error) throw new Error(`Failed to fetch boards: ${error.message}`);
  return data ?? [];
}

export async function getSchoolTypes(): Promise<{ id: string; name: string }[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('school_types')
    .select('id, name')
    .eq('is_active', true)
    .order('name');

  if (error) throw new Error(`Failed to fetch school types: ${error.message}`);
  return data ?? [];
}

export async function getManagementTypes(): Promise<{ id: string; name: string }[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('management_types')
    .select('id, name')
    .eq('is_active', true)
    .order('name');

  if (error) throw new Error(`Failed to fetch management types: ${error.message}`);
  return data ?? [];
}

export async function getMediums(): Promise<{ id: string; name: string }[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('mediums')
    .select('id, name')
    .eq('is_active', true)
    .order('name');

  if (error) throw new Error(`Failed to fetch mediums: ${error.message}`);
  return data ?? [];
}

export async function getClasses(): Promise<SchoolClass[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('classes')
    .select('*')
    .eq('is_active', true)
    .order('display_order');

  if (error) throw new Error(`Failed to fetch classes: ${error.message}`);
  return data ?? [];
}

export async function getFacilities(): Promise<Facility[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('facilities')
    .select('*')
    .eq('is_active', true)
    .order('category')
    .order('name');

  if (error) throw new Error(`Failed to fetch facilities: ${error.message}`);
  return data ?? [];
}