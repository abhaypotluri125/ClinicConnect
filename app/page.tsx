import { getClinics } from "@/services/clinic.service";
import { HomeClinics } from "@/components/home/home-clinics";

export default async function Home() {
  const clinics = await getClinics();

  return (
    <HomeClinics clinics={clinics} />
  );
}