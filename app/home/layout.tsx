import Navbar from "@/components/navbar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  return (
    <>
      {" "}
      <Navbar />
      <main className=" w-full max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        {children}
      </main>
    </>
  );
}
