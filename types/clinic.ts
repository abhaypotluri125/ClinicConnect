export interface Clinic {
  id: number;
  name: string;
  address: string;
  city: string;
  consultation_fee: number;
  verified: boolean;
  latitude: number;
  longitude: number;
  youtube_url?: string;
}