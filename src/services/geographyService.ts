import { createClient } from '@/lib/supabase/server';
import { Database } from '@/types/database';

type State = Database['public']['Tables']['states']['Row'];
type District = Database['public']['Tables']['districts']['Row'];
type City = Database['public']['Tables']['cities']['Row'];
type Locality = Database['public']['Tables']['localities']['Row'];

export async function getStates(): Promise<State[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('states')
    .select('*')
    .eq('is_active', true)
    .order('name');

  if (error) throw new Error(`Failed to fetch states: ${error.message}`);
  return data ?? [];
}

export async function getDistricts(stateId?: string): Promise<District[]> {
  const supabase = await createClient();
  let query = supabase.from('districts').select('*').eq('is_active', true);

  if (stateId) {
    query = query.eq('state_id', stateId);
  }

  const { data, error } = await query.order('name');
  if (error) throw new Error(`Failed to fetch districts: ${error.message}`);
  return data ?? [];
}

export async function getCities(districtId?: string): Promise<City[]> {
  const supabase = await createClient();
  let query = supabase.from('cities').select('*').eq('is_active', true);

  if (districtId) {
    query = query.eq('district_id', districtId);
  }

  const { data, error } = await query.order('name');
  if (error) throw new Error(`Failed to fetch cities: ${error.message}`);
  return data ?? [];
}

export async function getLocalities(cityId?: string): Promise<Locality[]> {
  const supabase = await createClient();
  let query = supabase.from('localities').select('*').eq('is_active', true);

  if (cityId) {
    query = query.eq('city_id', cityId);
  }

  const { data, error } = await query.order('name');
  if (error) throw new Error(`Failed to fetch localities: ${error.message}`);
  return data ?? [];
}