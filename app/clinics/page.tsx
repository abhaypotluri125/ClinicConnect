import { ClinicList } from "@/components/clinic/clinic-list";
import { getClinics } from "@/services/clinic.service";

export default async function ClinicsPage() {

  const clinics = await getClinics();


  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Find Clinics
      </h1>


      <section className="mt-10">

        <ClinicList
          clinics={clinics}
        />

      </section>

    </main>
  );
}