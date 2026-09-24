New-Item -ItemType Directory -Path "src\types" -Force -ErrorAction SilentlyContinue

@'
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type AppRoleType = 'parent' | 'student' | 'school' | 'admin';
export type SchoolStatusType = 'draft' | 'pending' | 'verified' | 'published' | 'suspended';
export type EnquiryStatusType = 'NEW' | 'CONTACTED' | 'INTERESTED' | 'VISIT' | 'APPLICATION' | 'ADMITTED' | 'LOST';

export interface Database {
  public: {
    Tables: {
      states: {
        Row: { id: string; name: string; code: string; is_active: boolean; created_at: string };
        Insert: { id?: string; name: string; code: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['states']['Insert']>;
      };
      districts: {
        Row: { id: string; state_id: string; name: string; is_active: boolean; created_at: string };
        Insert: { id?: string; state_id: string; name: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['districts']['Insert']>;
      };
      cities: {
        Row: { id: string; district_id: string; name: string; is_active: boolean; created_at: string };
        Insert: { id?: string; district_id: string; name: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['cities']['Insert']>;
      };
      localities: {
        Row: { id: string; city_id: string; name: string; pincode: string; is_active: boolean; created_at: string };
        Insert: { id?: string; city_id: string; name: string; pincode: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['localities']['Insert']>;
      };
      boards: {
        Row: { id: string; code: string; name: string; is_active: boolean; created_at: string };
        Insert: { id?: string; code: string; name: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['boards']['Insert']>;
      };
      school_types: {
        Row: { id: string; name: string; is_active: boolean };
        Insert: { id?: string; name: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['school_types']['Insert']>;
      };
      management_types: {
        Row: { id: string; name: string; is_active: boolean };
        Insert: { id?: string; name: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['management_types']['Insert']>;
      };
      mediums: {
        Row: { id: string; name: string; is_active: boolean };
        Insert: { id?: string; name: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['mediums']['Insert']>;
      };
      classes: {
        Row: { id: string; name: string; display_order: number; is_active: boolean };
        Insert: { id?: string; name: string; display_order: number; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['classes']['Insert']>;
      };
      facilities: {
        Row: { id: string; name: string; category: string; icon_name: string; is_active: boolean };
        Insert: { id?: string; name: string; category?: string; icon_name?: string; is_active?: boolean };
        Update: Partial<Database['public']['Tables']['facilities']['Insert']>;
      };
      schools: {
        Row: {
          id: string;
          slug: string;
          name: string;
          tagline: string | null;
          about: string | null;
          established_year: number | null;
          locality_id: string;
          address: string;
          board_id: string;
          school_type_id: string;
          management_type_id: string;
          medium_id: string;
          min_fees_monthly: number;
          max_fees_monthly: number;
          logo_url: string | null;
          banner_url: string | null;
          official_email: string;
          official_phone: string;
          website_url: string | null;
          is_verified: boolean;
          status: SchoolStatusType;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['schools']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['schools']['Insert']>;
      };
      school_classes: {
        Row: { school_id: string; class_id: string; admission_open: boolean };
        Insert: { school_id: string; class_id: string; admission_open?: boolean };
        Update: Partial<Database['public']['Tables']['school_classes']['Insert']>;
      };
      school_facilities: {
        Row: { school_id: string; facility_id: string };
        Insert: { school_id: string; facility_id: string };
        Update: Partial<Database['public']['Tables']['school_facilities']['Insert']>;
      };
      school_media: {
        Row: { id: string; school_id: string; media_url: string; media_type: string; caption: string | null; display_order: number; created_at: string };
        Insert: Omit<Database['public']['Tables']['school_media']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['school_media']['Insert']>;
      };
      school_fees: {
        Row: { id: string; school_id: string; class_id: string; admission_fee: number; tuition_fee_monthly: number; other_charges: number; created_at: string };
        Insert: Omit<Database['public']['Tables']['school_fees']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['school_fees']['Insert']>;
      };
      enquiries: {
        Row: {
          id: string;
          school_id: string;
          parent_id: string | null;
          parent_name: string;
          mobile: string;
          email: string | null;
          child_name: string | null;
          target_class_id: string;
          preferred_contact: string;
          message: string | null;
          status: EnquiryStatusType;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['enquiries']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['enquiries']['Insert']>;
      };
      enquiry_activities: {
        Row: {
          id: string;
          enquiry_id: string;
          actor_id: string | null;
          action_title: string;
          notes: string | null;
          status_change: EnquiryStatusType | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['enquiry_activities']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['enquiry_activities']['Insert']>;
      };
    };
  };
}
'@ | Out-File -FilePath "src\types\database.ts" -Encoding utf8