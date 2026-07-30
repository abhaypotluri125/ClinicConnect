import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          🩺 ClinicConnect
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/clinics">Clinics</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}