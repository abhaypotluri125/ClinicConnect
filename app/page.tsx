import { getClinics } from "@/services/clinic.service";

export default async function Home() {
  const clinics = await getClinics();

  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        ClinicConnect
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinics?.map((clinic: any) => (
          <div
            key={clinic.id}
            className="rounded-xl border p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {clinic.name}
            </h2>

            <p className="text-gray-500">
              {clinic.city}
            </p>

            <p className="mt-3">
              ₹{clinic.consultation_fee}
            </p>

            <p className="mt-2">
              {clinic.verified
                ? "✅ Verified"
                : "❌ Not Verified"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}