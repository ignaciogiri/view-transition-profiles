"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, X } from "lucide-react";
import type { Profile } from "@/lib/profiles";

export function ProfileSocialButtons({ profile }: { profile: Profile }) {
  const socials = [
    {
      key: "twitter" as const,
      icon: X,
      label: "X",
      getHref: (value: string) => value,
      isEmail: false,
    },
    {
      key: "github" as const,
      icon: Github,
      label: "GitHub",
      getHref: (value: string) => value,
      isEmail: false,
    },
    {
      key: "linkedin" as const,
      icon: Linkedin,
      label: "LinkedIn",
      getHref: (value: string) => value,
      isEmail: false,
    },
    {
      key: "email" as const,
      icon: Mail,
      label: "Email",
      getHref: (value: string) => `mailto:${value}`,
      isEmail: true,
    },
  ];

  return (
    <div className="flex justify-start gap-2 p-6 pt-0 mt-auto profile-social">
      {socials.map(({ key, icon: Icon, label, getHref, isEmail }) => {
        const value = profile.social[key];
        if (!value) return null;
        return (
          <Button
            key={key}
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label={`${profile.name}'s ${label}`}
            onClick={(e) => {
              e.stopPropagation();
              window.open(
                getHref(value),
                isEmail ? "_self" : "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <Icon className="h-4 w-4" />
          </Button>
        );
      })}
    </div>
  );
}
