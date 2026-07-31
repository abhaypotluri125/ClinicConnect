import { ClinicService } from "@/types/service";


export function PricingTable({
  services,
}: {
  services: ClinicService[];
}) {

  if (!services.length) {
    return null;
  }


  return (
    <section className="mt-10">

      <h2 className="text-2xl font-semibold mb-6">
        Services & Pricing
      </h2>


      <div className="rounded-xl border">

        {services.map((service) => (

          <div
            key={service.id}
            className="flex justify-between border-b p-4 last:border-b-0"
          >

            <span>
              {service.service_name}
            </span>


            <span className="font-semibold">
              ₹{service.price}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}