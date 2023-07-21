import React from "react";
import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./mobile-menu";
import Menu from "./menu";

import { Lateef } from "next/font/google";

const lateef = Lateef({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function LogoNav() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image src="./logo.svg" width={50} height={50} alt="Marlena Logo" />
      <div className={`${lateef.className} flex flex-col`}>
        <p className="text-violet-500 text-5xl leading-9 uppercase">Marlena</p>
        <p className="text-xl leading-5">Group of Companies</p>
      </div>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="container py-4 flex items-center justify-between border-b border-slate-800">
      <LogoNav />
      <Menu />
      <MobileMenu />
    </nav>
  );
}
