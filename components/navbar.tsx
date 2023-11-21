"use client";

import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import UserNav from "./user-nav";

interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  {
    name: "Home",
    href: "/home",
  },
  {
    name: "TV Shows",
    href: "/home/shows",
  },
  {
    name: "Movies",
    href: "/home/movies",
  },
  {
    name: "Recently Added",
    href: "/home/recently",
  },
  {
    name: "My List",
    href: "/home/user/list",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-6 py-5 lg:px-8 ">
      <div className="flex items-center">
        <Link className="w-32" href="/home">
          <Image
            width={128}
            height={100}
            priority
            src="/netflix_logo.svg"
            alt="logo"
          />
        </Link>

        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-white font-semibold underline text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </div>
  );
}
