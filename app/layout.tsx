import { unstable_ViewTransition as ViewTransition } from "react";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeMode } from "@/components/theme-mode";
import "@/styles/globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ainstein Profiles",
  description: "Meet our amazing team members",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get current profile ID from the URL if on a profile page
  let currentProfileId: number | undefined = undefined;
  if (typeof window !== "undefined") {
    const match = window.location.pathname.match(/^\/profile\/(\d+)/);
    if (match) {
      currentProfileId = Number(match[1]);
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Theme toggle in top right */}
          <div className="absolute top-4 left-4 z-50">
            <ThemeMode />
          </div>

          <ViewTransition
            name="nav"
            share={{
              default: "slide-forward",
              "nav-forward": "slide-forward",
              "nav-back": "slide-back",
            }}
          >
            <h1 className="text-3xl font-bold text-center mt-12">
              View Transition Test
            </h1>
          </ViewTransition>
          <main className="w-full mx-auto">
            <ViewTransition default="none">{children}</ViewTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
