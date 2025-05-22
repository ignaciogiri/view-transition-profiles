"use client";

import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import { use } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { unstable_ViewTransition as ViewTransition } from "react";
import profiles from "@/lib/profiles";
import type { Profile } from "@/lib/profiles";
import { ProfileSidebar } from "@/components/profile-sidebar";

interface ProfileDetailProps {
  profile: Profile;
  profileId: number;
}

const ProfileDetail = ({ profile, profileId }: ProfileDetailProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const router = useRouter();

  // Set up event listeners for navigation events
  useEffect(() => {
    const handlePageSwap = (event: any) => {
      if (!event.viewTransition) return;

      // Determine navigation context based on how Next.js router updates or intended destination
      // This is tricky because `event.activation` might not be fully populated yet for Next.js <Link>
      // For now, let's assume any navigation initiated *while on* a profile page,
      // and *going to another profile page*, is an internal one.
      // This logic needs to be robust based on what information `navigation.activation` provides.

      const currentPathname = window.location.pathname;
      // We need to know the *intended destination* to make a decision.
      // The 'navigate' event is better for getting destination. Let's stick to that
      // but ensure it's being listened to correctly for Next.js Link clicks.

      // Reverting to 'navigate' as 'pageswap' might be too late or not have destination info easily.
    };

    const handleNavigate = (event: any) => {
      if (!event.viewTransition) {
        console.log("No ViewTransition object in navigate event", event);
        return;
      }

      const destinationUrl = new URL(event.destination.url);
      const currentPathname = window.location.pathname;

      console.log("[handleNavigate] Event:", event);
      console.log("[handleNavigate] Navigation Type:", event.navigationType);
      console.log("[handleNavigate] Current Pathname:", currentPathname);
      console.log("[handleNavigate] Destination URL:", destinationUrl.href);

      const isNavigatingToAnotherProfile =
        destinationUrl.pathname.startsWith("/profile/") &&
        currentPathname.startsWith("/profile/") &&
        destinationUrl.pathname !== currentPathname;

      const isNavigatingHome = destinationUrl.pathname === "/";

      console.log(
        "[handleNavigate] isNavigatingToAnotherProfile:",
        isNavigatingToAnotherProfile
      );
      console.log("[handleNavigate] isNavigatingHome:", isNavigatingHome);

      if (isNavigatingToAnotherProfile) {
        event.viewTransition.types.add("profile-sidebar-internal-nav");
        console.log(
          "VT Type: profile-sidebar-internal-nav added for",
          destinationUrl.pathname
        );
      } else if (isNavigatingHome && currentPathname.startsWith("/profile/")) {
        event.viewTransition.types.add("slide-back");
        console.log("VT Type: slide-back added for", destinationUrl.pathname);
      } else {
        console.log(
          "[handleNavigate] No specific VT type added for this navigation."
        );
      }
      console.log(
        "[handleNavigate] Final event.viewTransition.types:",
        Array.from(event.viewTransition.types)
      );
    };

    const nav =
      typeof window !== "undefined" ? (window as any).navigation : null;
    if (nav) {
      const originalOnNavigate = nav.onnavigate; // Store original if any
      nav.onnavigate = handleNavigate;
      // nav.addEventListener('pageswap', handlePageSwap); // Keeping pageswap for consideration
      return () => {
        nav.onnavigate = originalOnNavigate; // Restore original or set to null
        // nav.removeEventListener('pageswap', handlePageSwap);
      };
    }
  }, []);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false); // This is good for same-page state if needed, but navigation handles transition
    router.push("/"); // This navigation will be caught by handleBeforeNavigate
  };

  const socialLinks = [
    profile.social.twitter && {
      href: profile.social.twitter,
      label: `${profile.name}'s X`,
      icon: X,
    },
    profile.social.github && {
      href: profile.social.github,
      label: `${profile.name}'s GitHub`,
      icon: Github,
    },
    profile.social.linkedin && {
      href: profile.social.linkedin,
      label: `${profile.name}'s LinkedIn`,
      icon: Linkedin,
    },
    profile.social.email && {
      href: `mailto:${profile.social.email}`,
      label: `Email ${profile.name}`,
      icon: Mail,
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: React.ElementType;
  }[];

  return (
    <div className="relative flex overflow-x-hidden">
      {/* Main content container */}
      <div className="flex-1 max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className={buttonVariants({ variant: "ghost", className: "pl-0" })}
            aria-label="Back to all profiles"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all profiles
          </Link>
        </div>
        <ViewTransition name={`profile-card-${profile.id}`}>
          <Card className="overflow-hidden profile-detail-card mb-8 md:mb-0">
            <CardHeader className="p-0">
              <ViewTransition name={`profile-image-${profile.id}`}>
                <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden">
                  <Image
                    src={"/placeholder.svg"}
                    width={800}
                    height={400}
                    alt={`${profile.name}'s profile picture`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </ViewTransition>
            </CardHeader>
            <div className="p-6">
              <CardContent className="p-0 mb-6">
                <h1 className="text-3xl font-bold mb-1">{profile.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">
                  {profile.title}
                </p>
                <div className="space-y-4 profile-details">
                  <div className="prose dark:prose-invert">
                    <ReactMarkdown>{profile.bio}</ReactMarkdown>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-0">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      size: "icon",
                    })}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </CardFooter>
            </div>
          </Card>
        </ViewTransition>
      </div>

      {/* Profile Sidebar */}
      <ProfileSidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
    </div>
  );
};

export default function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const profileId = Number(id);

  // Early return for invalid ID format
  if (!Number.isInteger(profileId) || profileId < 1) {
    notFound();
  }

  // Find profile synchronously from local data
  const profile = profiles.find((p) => p.id === profileId);
  if (!profile) {
    notFound();
  }

  return <ProfileDetail profile={profile} profileId={profileId} />;
}
