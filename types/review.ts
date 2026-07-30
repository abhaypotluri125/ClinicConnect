export interface Review {
  id: number;
  clinic_id: number;
  reviewer_name: string;
  rating: number;
  feedback: string;
  verified_govt_status: boolean;
  created_at: string;
}