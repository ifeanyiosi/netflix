import MovieVideo from "@/components/movie-video";
import Navbar from "@/components/navbar";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function HomePage() {
  return <MovieVideo />;
}
