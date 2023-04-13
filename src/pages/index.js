import { useAuth } from '@clerk/nextjs';
import { useClerk, SignedIn, SignedOut } from "@clerk/clerk-react";
import Link from "next/link";

export default function Home() {
  // landing page template from tailwind docs
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { signOut } = useClerk();

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Efficiently plan and manage your tasks
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        A website by William Meziva 
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <SignedIn>
          <Link
            href={"/todos"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
        </SignedIn>
        <SignedOut>
          <Link
            href={"/sign-in"}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
        </SignedOut>
      </div>
    </div>
  )
}