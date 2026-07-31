import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

type Clinic = {
  name: string;
  address: string;
  city: string;
  consultation_fee: number;
  verified: boolean;
};

export function ClinicHeader({
  clinic,
}: {
  clinic: Clinic;
}) {
  return (
    <section className="rounded-xl border p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            {clinic.name}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            {clinic.address}, {clinic.city}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Badge>
              ₹{clinic.consultation_fee} Consultation
            </Badge>

            {clinic.verified && (
              <Badge>
                ✅ Verified Clinic
              </Badge>
            )}
          </div>
        </div>

        <Button>
          Get Directions
        </Button>

      </div>
    </section>
  );
}