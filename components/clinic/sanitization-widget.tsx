import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SanitizationLog } from "@/types/sanitization";


export function SanitizationWidget({
  data,
}: {
  data: SanitizationLog;
}) {

  const percentage =
    (data.completed_count / data.target_count) * 100;


  return (
    <Card>
      <CardContent className="space-y-4 p-6">

        <h2 className="flex items-center gap-2 text-xl font-semibold text-teal-700">
          Today's Sanitization
        </h2>


        <Progress value={percentage} />


        <div className="flex justify-between">
          <span>
            Completed
          </span>

          <strong>
            {data.completed_count}/{data.target_count}
          </strong>
        </div>


        <p className="text-sm text-gray-500">
          🧹 Daily hygiene compliance: {percentage}%
        </p>

      </CardContent>
    </Card>
  );
}