export interface Clinic {
  id: number;
  name: string;
  city: string;
  address: string;
  consultation_fee: number;
  verified: boolean;

  rating?: number;
  review_count?: number;

  sanitization_logs?: {
    completed_count: number;
    target_count: number;
  }[];
}