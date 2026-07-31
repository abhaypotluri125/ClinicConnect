import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clinic } from "@/types/clinic";
import { Progress } from "@/components/ui/progress";

export function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="space-y-4 bg-gradient-to-br from-white to-blue-50 p-6">

        <h2 className="text-xl font-semibold">
          {clinic.name}
        </h2>

        <p>
          {clinic.city}
        </p>

        {clinic.rating !== undefined && (
          <div className="space-y-2">

            <p className="text-sm font-medium">
              ⭐ {clinic.rating}/5
              {" "}
              ({clinic.review_count} reviews)
            </p>

            <Progress
              value={(clinic.rating / 5) * 100}
            />

          </div>
        )}

        <p className="font-medium">
          ₹{clinic.consultation_fee}
        </p>


        {clinic.verified && (
          <Badge>
            Verified
          </Badge>
        )}


        {clinic.sanitization_logs?.[0] && (
          <p className="text-sm">
            🧹 Sanitized{" "}
            {clinic.sanitization_logs[0].completed_count}
            /
            {clinic.sanitization_logs[0].target_count}
            times today
          </p>
        )}


        <Link
          href={`/clinics/${clinic.id}`}
          className="block text-blue-600"
        >
          View Details →
        </Link>

      </CardContent>
    </Card>
  );
}