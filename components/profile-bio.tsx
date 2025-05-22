"use client"; // ReactMarkdown might need client context for some plugins/features

import ReactMarkdown from "react-markdown";

interface ProfileBioProps {
  bio: string;
}

export default async function ProfileBio({ bio }: ProfileBioProps) {
  // Simulate a delay for demonstration purposes
  if (process.env.NODE_ENV === "development") {
    await new Promise((resolve) => setTimeout(resolve, 750)); // Shorter delay for bio
  }

  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown>{bio}</ReactMarkdown>
    </div>
  );
}
