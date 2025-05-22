import { ProfileGrid } from "@/components/profile-grid";
import profiles from "@/lib/profiles";

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <ProfileGrid profiles={profiles} />
    </div>
  );
}
