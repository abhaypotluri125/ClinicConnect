import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Find Trusted Healthcare Near You
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Compare clinics, reviews, pricing, sanitization, and book with confidence.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl gap-3">
          <Input
            placeholder="Search by clinic or city..."
            className="h-12"
          />

          <Button className="h-12 px-6">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
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