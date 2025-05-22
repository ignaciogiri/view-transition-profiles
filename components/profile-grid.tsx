"use client";
import { unstable_ViewTransition as ViewTransition } from "react";

import type { Profile } from "@/lib/profiles";
import { ProfileCard } from "@/components/profile-card";

export function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="w-full sm:max-w-2xl lg:max-w-6xl sm:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        <ViewTransition name="profile-grid">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </ViewTransition>
      </div>
    </div>
  );
}
