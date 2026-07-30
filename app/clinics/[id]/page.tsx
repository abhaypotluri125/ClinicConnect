import { getClinic } from "@/services/clinic.service";
import { Badge } from "@/components/ui/badge";

export default async function ClinicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const clinic = await getClinic(id);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold">
        {clinic.name}
      </h1>

      <p className="mt-2 text-gray-600">
        {clinic.address}, {clinic.city}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Badge>₹{clinic.consultation_fee}</Badge>

        {clinic.verified && (
          <Badge>Verified Clinic</Badge>
        )}
      </div>

      <div className="mt-10 rounded-xl border p-8">
        <h2 className="text-2xl font-semibold">
          Clinic Overview
        </h2>

        <p className="mt-4">
          This section will soon include reviews,
          sanitization status, Google Maps,
          YouTube videos, and pricing information.
        </p>
      </div>
    </main>
  );
}