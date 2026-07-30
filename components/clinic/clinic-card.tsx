import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Clinic = {
  id: number;
  name: string;
  city: string;
  consultation_fee: number;
  verified: boolean;
};

export function ClinicCard({ clinic }: { clinic: Clinic }) {
  return (
    <Card className="transition hover:shadow-lg">
      <CardContent className="space-y-3 p-6">
        <h2 className="text-xl font-semibold">
          {clinic.name}
        </h2>

        <p>{clinic.city}</p>

        <p className="font-medium">
          ₹{clinic.consultation_fee}
        </p>

        {clinic.verified && (
          <Badge>
            Verified
          </Badge>
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