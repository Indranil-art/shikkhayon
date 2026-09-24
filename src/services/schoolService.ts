@'
import { createClient } from '@/lib/supabase/server';

export interface SchoolSearchParams {
  q?: string;
  boardId?: string;
  districtId?: string;
  cityId?: string;
  localityId?: string;
  schoolTypeId?: string;
  classId?: string;
  maxMonthlyFee?: number;
  page?: number;
  limit?: number;
}

export interface SchoolSearchResult {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  address: string;
  min_fees_monthly: number;
  max_fees_monthly: number;
  logo_url: string | null;
  banner_url: string | null;
  is_verified: boolean;
  board: { id: string; code: string; name: string };
  school_type: { id: string; name: string };
  medium: { id: string; name: string };
  locality: {
    name: string;
    pincode: string;
    city: {
      name: string;
      district: {
        name: string;
      };
    };
  };
  classes: { id: string; name: string }[];
  facilities: { id: string; name: string; icon_name: string }[];
}

export async function searchSchools(params: SchoolSearchParams): Promise<{
  schools: SchoolSearchResult[];
  total: number;
  page: number;
  totalPages: number;
}> {
  const supabase = await createClient();
  const page = Math.max(1, Number(params.page) || 1);
  const limit = Math.max(1, Math.min(50, Number(params.limit) || 10));
  const offset = (page - 1) * limit;

  let query = supabase
    .from('schools')
    .select(
      `
      id,
      slug,
      name,
      tagline,
      address,
      min_fees_monthly,
      max_fees_monthly,
      logo_url,
      banner_url,
      is_verified,
      board:boards!board_id (id, code, name),
      school_type:school_types!school_type_id (id, name),
      medium:mediums!medium_id (id, name),
      locality:localities!locality_id (
        name,
        pincode,
        city:cities!city_id (
          name,
          district:districts!district_id (name)
        )
      ),
      school_classes (
        class:classes!class_id (id, name, display_order)
      ),
      school_facilities (
        facility:facilities!facility_id (id, name, icon_name)
      )
    `,
      { count: 'exact' }
    )
    .eq('status', 'published');

  if (params.q?.trim()) {
    query = query.ilike('name', `%${params.q.trim()}%`);
  }
  if (params.boardId) {
    query = query.eq('board_id', params.boardId);
  }
  if (params.schoolTypeId) {
    query = query.eq('school_type_id', params.schoolTypeId);
  }
  if (params.maxMonthlyFee && params.maxMonthlyFee > 0) {
    query = query.lte('min_fees_monthly', params.maxMonthlyFee);
  }
  if (params.localityId) {
    query = query.eq('locality_id', params.localityId);
  }

  query = query
    .order('is_verified', { ascending: false })
    .order('name', { ascending: true })
    .range(offset, offset + limit - 1);

  const { data, count, error } = await query;

  if (error) {
    throw new Error(`School search query failed: ${error.message}`);
  }

  const formatted: SchoolSearchResult[] = (data || []).map((item: any) => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    tagline: item.tagline,
    address: item.address,
    min_fees_monthly: item.min_fees_monthly,
    max_fees_monthly: item.max_fees_monthly,
    logo_url: item.logo_url,
    banner_url: item.banner_url,
    is_verified: item.is_verified,
    board: item.board,
    school_type: item.school_type,
    medium: item.medium,
    locality: item.locality,
    classes: (item.school_classes || [])
      .map((sc: any) => sc.class)
      .filter(Boolean)
      .sort((a: any, b: any) => a.display_order - b.display_order),
    facilities: (item.school_facilities || [])
      .map((sf: any) => sf.facility)
      .filter(Boolean),
  }));

  const total = count ?? 0;

  return {
    schools: formatted,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getSchoolBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('schools')
    .select(
      `
      *,
      board:boards!board_id (id, code, name),
      school_type:school_types!school_type_id (id, name),
      medium:mediums!medium_id (id, name),
      management_type:management_types!management_type_id (id, name),
      locality:localities!locality_id (
        id,
        name,
        pincode,
        city:cities!city_id (
          id,
          name,
          district:districts!district_id (id, name)
        )
      ),
      school_classes (
        admission_open,
        class:classes!class_id (id, name, display_order)
      ),
      school_facilities (
        facility:facilities!facility_id (id, name, category, icon_name)
      ),
      school_media (id, media_url, media_type, caption, display_order),
      school_fees (id, admission_fee, tuition_fee_monthly, other_charges, class:classes!class_id(name))
    `
    )
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !data) return null;
  return data;
}
'@ | Out-File -FilePath "src\services\schoolService.ts" -Encoding utf8