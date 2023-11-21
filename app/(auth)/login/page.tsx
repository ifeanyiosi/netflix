import GithubSignInButton from "@/components/github-sign-in-button";
import GoogleSignInButton from "@/components/google-sign-in-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Log In</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-sm placeholder:text-gray-400 w-full inline-block "
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full  bg-[#e50914]"
          >
            Login
          </Button>
        </div>
      </form>

      <div className="text-gray-500 text-sm mt-2 ">
        New to Netflix??{" "}
        <Link className="text-white hover:underline" href="/sign-up">
          Sign up
        </Link>
        now
      </div>

      <div className="flex w-full items-center justify-center gap-x-3 mt-6">
        <GithubSignInButton />

        <GoogleSignInButton />
      </div>
    </div>
  );
}
