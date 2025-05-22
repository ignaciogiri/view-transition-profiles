import { ReactNode } from "react";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  // Optionally, extract profile ID from the URL if needed for the sidebar
  // For now, ProfileSidebar can read the current route or be enhanced later

  return (
    <>
      <main>{children}</main>
      <ViewTransition name="sidebar" share={{ default: "slide-in" }}>
        <ProfileSidebar />
      </ViewTransition>
    </>
  );
}
