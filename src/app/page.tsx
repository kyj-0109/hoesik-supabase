import { getRestaurants, getMaxPeople } from "@/lib/data";
import HomeClient from "@/components/HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [restaurants, maxPeople] = await Promise.all([
    getRestaurants(),
    getMaxPeople(),
  ]);
  return <HomeClient restaurants={restaurants} maxPeople={maxPeople} />;
}
