import { Hero } from "@/components/home/hero";
import { ClinicCard } from "@/components/clinic/clinic-card";
import { getClinics } from "@/services/clinic.service";

export default async function Home() {
  const clinics = await getClinics();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">
          Featured Clinics
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clinics?.map((clinic: any) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
            />
          ))}
        </div>
      </section>
    </>
  );
}