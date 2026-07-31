"use client";

import { useState } from "react";
import { ClinicCard } from "@/components/clinic/clinic-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Clinic = {
  id: number;
  name: string;
  city: string;
  consultation_fee: number;
  verified: boolean;
};

export function ClinicSearch({
  clinics,
}: {
  clinics: Clinic[];
}) {
  const [query, setQuery] = useState("");

  const filteredClinics = clinics.filter((clinic) => {
    const searchText =
      `${clinic.name} ${clinic.city}`.toLowerCase();

    return searchText.includes(query.toLowerCase());
  });

  return (
    <section>
      <div className="relative mb-8 max-w-xl">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

        <Input
          placeholder="Search by clinic or city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 pl-10"
        />
      </div>


      {filteredClinics.length === 0 ? (
        <div className="rounded-xl border p-8 text-center text-gray-500">
          No clinics found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredClinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
            />
          ))}
        </div>
      )}

    </section>
  );
}