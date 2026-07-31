import { Badge } from "@/components/ui/badge";
import {
  getClinic,
  getClinicReviews,
} from "@/services/clinic.service";
import { ReviewCard } from "@/components/clinic/review-card";
import { RatingSummary } from "@/components/clinic/rating-summary";
import { SanitizationWidget } from "@/components/clinic/sanitization-widget";
import { PricingCard } from "@/components/clinic/pricing-card";
import { MapCard } from "@/components/clinic/map-card";
import { VideoCard } from "@/components/clinic/video-card";
import { getSanitizationStatus } from "@/services/clinic.service";
import { getClinicServices } from "@/services/clinic.service";
import { PricingTable } from "@/components/clinic/pricing-table";
import { ClinicHeader } from "@/components/clinic/clinic-header";

export default async function ClinicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const clinic = await getClinic(id);
  const services = await getClinicServices(id);
  const reviews = await getClinicReviews(id);
  const sanitization = await getSanitizationStatus(id);
  console.log("Sanitization data:", sanitization);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white px-6 py-12">
      {/* Header */}
      <ClinicHeader clinic={clinic} />

      {/* Overview */}
      <section className="mt-10 rounded-xl border p-8">
        <h2 className="text-2xl font-semibold">
          Clinic Overview
        </h2>
        <PricingTable
          services={services}
        />
      </section>
      
      {/* Rating Summary */}
      <section className="mt-10">
        <RatingSummary reviews={reviews} />
      </section>

      {/* Sanitization */}
      <section className="mt-6">
        {sanitization && (
          <SanitizationWidget
            data={sanitization}
          />
        )}
      </section>

      {/* Pricing */}
      <section className="mt-6">
        <PricingCard
          consultationFee={clinic.consultation_fee}
        />
      </section>

      {/* Video */}
      <section className="mt-6">
        <VideoCard
          youtubeUrl={clinic.youtube_url}
        />
      </section>
      
      {/*Map */}
      <section className="mt-6">
        <MapCard
          latitude={clinic.latitude}
          longitude={clinic.longitude}
          name={clinic.name}
        />
      </section>

      {/* Reviews */}
      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            Patient Reviews
          </h2>

          <Badge variant="secondary">
            {reviews.length} Reviews
          </Badge>
        </div>

        {reviews.length === 0 ? (
          <div className="rounded-xl border p-6 text-center text-gray-500">
            No reviews yet.
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}