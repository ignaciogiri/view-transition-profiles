"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import profiles from "@/lib/profiles";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

interface ProfileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfileSidebar({ isOpen, onClose }: ProfileSidebarProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleProfileLinkClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // Prevent the Link's default navigation

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href); // Perform navigation within the transition
      });
    } else {
      router.push(href); // Fallback if View Transitions are not supported
    }
  };

  return (
    <>
      {/* Optional: Backdrop for better UX, especially on mobile */}
      <div
        className="fixed inset-0 bg-black/30 z-20 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="fixed top-0 right-0 h-screen w-72 max-w-xs z-30 overflow-y-auto bg-background border-l border-border"
        style={{ viewTransitionName: "profile-sidebar" }}
      >
        <Card className="h-full rounded-none shadow-none border-0">
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold">Other Team Members</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              {profiles.map((p) => {
                const profileUrl = `/profile/${p.id}`;
                return (
                  <li key={p.id}>
                    <Link
                      href={profileUrl}
                      onClick={(e) => handleProfileLinkClick(profileUrl, e)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-muted overflow-hidden flex-shrink-0">
                        <Image
                          src={"/placeholder.svg"}
                          width={40}
                          height={40}
                          alt={p.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block font-medium text-sm group-hover:underline truncate">
                          {p.name}
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          {p.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </aside>
    </>
  );
}
