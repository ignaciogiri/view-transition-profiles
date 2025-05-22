import { unstable_ViewTransition as ViewTransition } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Profile } from "@/lib/profiles";
import Link from "next/link";
import { ProfileSocialButtons } from "@/components/profile-social-buttons";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Link href={`/profile/${profile.id}`} className="block group">
      <ViewTransition
        name={`profile-card-${profile.id}`}
        default="via-blur"
        exit="duration-1000"
      >
        <Card className="overflow-hidden group h-full profile-card cursor-pointer">
          <CardHeader className="p-0">
            <ViewTransition name={`profile-image-${profile.id}`}>
              <div className="relative overflow-hidden h-[200px] flex items-center justify-center bg-muted">
                <Image
                  src={"/placeholder.svg"}
                  width={500}
                  height={200}
                  alt={`${profile.name}'s profile picture`}
                  className="object-contain"
                />
              </div>
            </ViewTransition>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {profile.title}
            </p>
            <p className="text-sm profile-bio">{profile.shortBio}</p>
          </CardContent>
          <ProfileSocialButtons profile={profile} />
        </Card>
      </ViewTransition>
    </Link>
  );
}
