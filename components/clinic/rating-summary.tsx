import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { Review } from "@/types/review";

type Props = {
  reviews: Review[];
};

export function RatingSummary({ reviews }: Props) {
  const totalReviews = reviews.length;

  const average =
    totalReviews === 0
      ? 0
      : reviews.reduce((sum, review) => sum + review.rating, 0) /
        totalReviews;

  const percentage = (average / 5) * 100;

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-2xl font-semibold">
          Overall Rating
        </h2>

        <div className="flex items-end gap-3">
          <span className="text-5xl font-bold">
            {average.toFixed(1)}
          </span>

          <span className="pb-2 text-gray-500">
            /5 ({totalReviews} reviews)
          </span>
        </div>

        <Progress value={percentage} />

        <p className="text-sm text-gray-500">
          {percentage.toFixed(0)}% satisfaction score
        </p>
      </CardContent>
    </Card>
  );
}