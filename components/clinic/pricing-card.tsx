import { Card, CardContent } from "@/components/ui/card";

type Props = {
  consultationFee: number;
};

export function PricingCard({
  consultationFee,
}: Props) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold">
          Consultation Pricing
        </h2>

        <div className="mt-4 flex items-center justify-between rounded-lg bg-muted p-4">
          <span>General Consultation</span>

          <span className="text-2xl font-bold">
            ₹{consultationFee}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          Pricing displayed is indicative and may vary depending on treatment.
        </p>
      </CardContent>
    </Card>
  );
}