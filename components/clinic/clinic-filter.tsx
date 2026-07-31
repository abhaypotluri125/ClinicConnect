"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  onSearch: (value: string) => void;
  onSort: (type: string) => void;
};


export function ClinicFilter({
  onSearch,
  onSort,
}: Props) {

  const [search, setSearch] = useState("");


  return (
    <div className="space-y-4">

      <Input
        placeholder="Search clinic..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
      />


      <div className="flex flex-wrap gap-3">

        <Button
          variant="outline"
          onClick={() =>
            onSort("rating")
          }
        >
          ⭐ Highest Rated
        </Button>


        <Button
          variant="outline"
          onClick={() =>
            onSort("sanitization")
          }
        >
          🧹 Most Sanitized
        </Button>


        <Button
          variant="outline"
          onClick={() =>
            onSort("distance")
          }
        >
          📍 Closest
        </Button>

      </div>

    </div>
  );
}