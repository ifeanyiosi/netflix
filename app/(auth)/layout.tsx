import Image from "next/image";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        priority
        fill
        className="hidden sm:flex sm:object-cover brightness-50 -z-10"
        src="/login_background.jpg"
        alt="background image"
      />

      <Image
        priority
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        src="/netflix_logo.svg"
        alt="logo"
      />
      {children}
    </div>
  );
}
