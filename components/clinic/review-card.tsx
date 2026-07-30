import { Card, CardContent } from "@/components/ui/card";

import { Review } from "@/types/review";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card>
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">
            {review.reviewer_name}
          </h3>

          <span>
            {"⭐".repeat(review.rating)}
          </span>
        </div>

        <p className="text-sm text-gray-600">
          {review.feedback}
        </p>
      </CardContent>
    </Card>
  );
}