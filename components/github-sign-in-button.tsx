"use client";

import React from "react";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <FaGithub className="w-4 h-4 " />
    </Button>
  );
}
