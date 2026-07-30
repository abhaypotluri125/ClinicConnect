import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Props = {
  completed: number;
  target: number;
};

export function SanitizationWidget({
  completed,
  target,
}: Props) {
  const percentage = (completed / target) * 100;

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold">
          Today's Sanitization
        </h2>

        <Progress value={percentage} />

        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Sanitized
          </p>

          <strong>
            {completed}/{target} Times
          </strong>
        </div>

        <p className="text-sm text-gray-500">
          Daily hygiene compliance
        </p>
      </CardContent>
    </Card>
  );
}