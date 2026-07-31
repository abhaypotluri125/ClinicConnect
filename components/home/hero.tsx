"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Hero({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  function handleSearch() {
    onSearch(query);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-teal-100 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <h1 className="bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
          Find Trusted Healthcare Near You
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Compare clinics, reviews, pricing,
          sanitization, and book with confidence.
        </p>


        <div className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row">

          <Input
            placeholder="Search by clinic or city..."
            className="h-12"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <Button
            className="h-12 px-6"
            onClick={handleSearch}
          >
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>

        </div>


        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm">
            ✅ Verified Clinics
          </span>

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm">
            🧹 Daily Sanitization
          </span>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm">
            ⭐ Trusted Reviews
          </span>

        </div>

      </div>
    </section>
  );
}