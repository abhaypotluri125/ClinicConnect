"use client";

import { useState } from "react";
import { ClinicFilter } from "./clinic-filter";
import { Clinic } from "@/types/clinic";
import { ClinicCard } from "./clinic-card";


export function ClinicList({
  clinics,
}: {
  clinics: Clinic[];
}) {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");


  let filtered = clinics.filter(
    (clinic) =>
      clinic.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );


  if (sort === "rating") {

    filtered = [...filtered].sort(
      (a, b) =>
        (b.rating ?? 0) -
        (a.rating ?? 0)
    );

  }


  if (sort === "sanitization") {

    filtered = [...filtered].sort(
      (a, b) => {

        const aLog =
          a.sanitization_logs?.[0];

        const bLog =
          b.sanitization_logs?.[0];


        const aScore =
          aLog
            ? aLog.completed_count /
              aLog.target_count
            : 0;


        const bScore =
          bLog
            ? bLog.completed_count /
              bLog.target_count
            : 0;


        return bScore - aScore;
      }
    );

  }


  return (
    <div className="space-y-6">

      <ClinicFilter
        onSearch={setSearch}
        onSort={setSort}
      />


      <div className="grid gap-6 md:grid-cols-3">

        {filtered.map((clinic) => (

          <ClinicCard
            key={clinic.id}
            clinic={clinic}
          />

        ))}

      </div>

    </div>
  );
}