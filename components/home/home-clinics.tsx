"use client";

import { useState } from "react";
import { Hero } from "@/components/home/hero";
import { ClinicCard } from "@/components/clinic/clinic-card";

export function HomeClinics({
  clinics,
}: {
  clinics: any[];
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClinics = clinics.filter((clinic) =>
    `${clinic.name} ${clinic.city}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white">

      <Hero onSearch={setSearchQuery} />


      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Clinics
            </h2>

            <p className="mt-2 text-gray-600">
              Trusted healthcare providers near you
            </p>
          </div>


          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {filteredClinics.length} Clinics
          </span>

        </div>


        {filteredClinics.length === 0 ? (

          <div className="rounded-xl border bg-white p-10 text-center text-gray-500">
            No clinics found. Try another search.
          </div>

        ) : (

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredClinics.map((clinic) => (
              <ClinicCard
                key={clinic.id}
                clinic={clinic}
              />
            ))}

          </div>

        )}

      </section>

    </main>
  );
}