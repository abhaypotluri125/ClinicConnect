import Link from "next/link";
import {
  HeartPulse,
  Home,
  Building2,
  Info,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 transition hover:text-blue-700"
        >
          <div className="rounded-xl bg-blue-100 p-2">
            <HeartPulse className="h-5 w-5" />
          </div>

          ClinicConnect
        </Link>


        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">

          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>


          <Link
            href="/clinics"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Building2 className="h-4 w-4" />
            Find Clinics
          </Link>


          <Link
            href="/about"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Info className="h-4 w-4" />
            About
          </Link>
          <Link
            href="/admin"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <LayoutDashboard className="h-4 w-4" />
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}