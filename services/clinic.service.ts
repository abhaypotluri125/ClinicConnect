import { supabase } from "@/lib/supabase";
import { Clinic } from "@/types/clinic";
import { Review } from "@/types/review";
import { SanitizationLog } from "@/types/sanitization";
import { ClinicService } from "@/types/service";

export async function getSanitizationStatus(
  clinicId: string
): Promise<SanitizationLog | null> {

  const { data, error } = await supabase
    .from("sanitization_logs")
    .select("*")
    .eq("clinic_id", clinicId)
    .limit(1)
    .maybeSingle();


  if (error) {
    console.error("Sanitization Error:", error.message);
    return null;
  }

  return data;
}

export async function getClinics(): Promise<Clinic[]> {

  const { data, error } = await supabase
    .from("clinics")
    .select(`
      *,
      sanitization_logs (
        completed_count,
        target_count
      ),
      reviews (
        rating
      )
    `);


  if (error) throw error;


  return data.map((clinic) => {

    const reviews =
      clinic.reviews ?? [];


    const rating =
      reviews.length > 0
        ? Number(
            (
              reviews.reduce(
                (
                  sum: number,
                  review: { rating: number }
                ) =>
                  sum + review.rating,
                0
              ) / reviews.length
            ).toFixed(1)
          )
        : 0;


    return {
      ...clinic,
      rating,
      review_count: reviews.length,
    };

  });

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

export async function getClinicRating(
  clinicId: string
) {

  const { data, error } = await supabase
    .from("reviews")
    .select("rating")
    .eq("clinic_id", clinicId);


  if (error) {
    console.error(
      "Rating Error:",
      error.message
    );

    return 0;
  }


  if (!data || data.length === 0) {
    return 0;
  }


  const total = data.reduce(
    (sum, review) =>
      sum + review.rating,
    0
  );


  return Number(
    (total / data.length)
      .toFixed(1)
  );
}

export async function updateSanitizationCount(
  clinicId: number,
  completedCount: number
) {

  const { data, error } =
    await supabase
      .from("sanitization_logs")
      .update({
        completed_count: completedCount,
      })
      .eq("clinic_id", clinicId)
      .select()
      .single();


  if (error) {
    console.error(
      "Update Sanitization Error:",
      error.message
    );

    throw error;
  }


  return data;
}

export async function getClinicServices(
  clinicId: string
): Promise<ClinicService[]> {

  const { data, error } = await supabase
    .from("clinic_services")
    .select("*")
    .eq("clinic_id", clinicId);


  if (error) {
    console.error(
      "Pricing Error:",
      error.message
    );

    return [];
  }


  return data;
}