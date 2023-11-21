"use client";

import React from "react";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <FcGoogle className="w-4 h-4 " />
    </Button>
  );
}
