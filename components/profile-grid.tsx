"use client";
import { unstable_ViewTransition as ViewTransition } from "react";

import type { Profile } from "@/lib/profiles";
import { ProfileCard } from "@/components/profile-card";

export function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <ViewTransition name="profile-grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </ViewTransition>
    </div>
  );
}
