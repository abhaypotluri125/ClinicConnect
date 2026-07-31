import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SanitizationForm } from "@/components/admin/sanitization-form";
import {
  getSanitizationStatus,
  getClinicReviews,
  getClinic,
} from "@/services/clinic.service";


export default async function AdminPage() {

  const clinicId = "1";


  const clinic = await getClinic(clinicId);

  const sanitization =
    await getSanitizationStatus(clinicId);

  const reviews =
    await getClinicReviews(clinicId);


  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Clinic Admin Dashboard
      </h1>


      <p className="mt-3 text-gray-600">
        Manage clinic information,
        sanitization, pricing, and reviews.
      </p>


      <section className="mt-10 grid gap-6 md:grid-cols-3">


        <Card>
          <CardContent className="p-6">

            <h2 className="font-semibold">
              Sanitization
            </h2>

            <Badge className="mt-4">
              {sanitization
                ? `${sanitization.completed_count}/${sanitization.target_count}`
                : "No Data"
              }
            </Badge>

          </CardContent>
        </Card>



        <Card>
          <CardContent className="p-6">

            <h2 className="font-semibold">
              Reviews
            </h2>

            <Badge className="mt-4">
              {reviews.length} Reviews
            </Badge>

          </CardContent>
        </Card>



        <Card>
          <CardContent className="p-6">

            <h2 className="font-semibold">
              Clinic Status
            </h2>

            <Badge className="mt-4">
              {clinic.verified
                ? "Verified"
                : "Not Verified"
              }
            </Badge>

          </CardContent>
        </Card>


      </section>


      <section className="mt-10">

        {sanitization && (
          <SanitizationForm
            clinicId={clinic.id}
            currentCompleted={
              sanitization.completed_count
            }
            currentTarget={
              sanitization.target_count
            }
          />
        )}

      </section>


    </main>
  );
}