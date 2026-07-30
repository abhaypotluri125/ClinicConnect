import { supabase } from "@/lib/supabase";
import { Clinic } from "@/types/clinic";
import { Review } from "@/types/review";

export async function getClinics(): Promise<Clinic[]> {
  const { data, error } = await supabase
    .from("clinics")
    .select("*");

  if (error) throw error;

  return data;
}


export async function getClinic(
  id: string
): Promise<Clinic> {
  const { data, error } = await supabase
    .from("clinics")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}


export async function getClinicReviews(
  clinicId: string
): Promise<Review[]> {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("clinic_id", clinicId);

  if (error) throw error;

  return data;
}