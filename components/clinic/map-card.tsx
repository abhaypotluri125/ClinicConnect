import { Card, CardContent } from "@/components/ui/card";

type Props = {
  latitude: number;
  longitude: number;
  name: string;
};

export function MapCard({
  latitude,
  longitude,
  name,
}: Props) {
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-semibold">
          Location
        </h2>

        <iframe
          src={mapUrl}
          width="100%"
          height="350"
          loading="lazy"
          className="rounded-lg border"
          title={`${name} location`}
        />

        <a
          href={directionsUrl}
          target="_blank"
          className="inline-block text-blue-600 hover:underline"
        >
          Get Directions →
        </a>
      </CardContent>
    </Card>
  );
}