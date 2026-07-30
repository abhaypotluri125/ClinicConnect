import { Card, CardContent } from "@/components/ui/card";

type Props = {
  youtubeUrl: string;
};

export function VideoCard({
  youtubeUrl,
}: Props) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold">
          Clinic Introduction
        </h2>

        <div className="aspect-video overflow-hidden rounded-lg">
          <iframe
            src={youtubeUrl}
            title="Clinic Introduction Video"
            className="h-full w-full"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  );
}