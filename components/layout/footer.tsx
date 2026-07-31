export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-blue-50 via-white to-teal-50">
      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-blue-100 p-2">
              <span className="text-lg">🩺</span>
            </div>

            <span className="text-lg font-bold text-blue-700">
              ClinicConnect
            </span>
          </div>


          <p className="text-sm text-gray-500">
            © 2026 ClinicConnect. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}