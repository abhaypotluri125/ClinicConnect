import { supabase } from "@/lib/supabase";

export async function getClinics() {
  const { data, error } = await supabase
    .from("clinics")
    .select("*")
    .order("id");

  if (error) throw error;

  return data;
}