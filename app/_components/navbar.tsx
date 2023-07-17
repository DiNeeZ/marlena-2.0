import React from "react";
import Link from "next/link";
import Image from "next/image";

import MobileMenu from "./menu/mobile-menu";

import { Lateef } from "next/font/google";
import Menu from "./menu/menu";

const lateef = Lateef({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Navbar() {
  return (
    <nav className="container py-4 flex items-center justify-between border-b border-slate-800">
      <Link href="/" className="flex items-center gap-4">
        <Image src="./logo.svg" width={50} height={50} alt="Marlena Logo" />
        <div className={`${lateef.className} flex flex-col`}>
          <p className="text-violet-500 text-5xl leading-9 uppercase">
            Marlena
          </p>
          <p className="text-xl leading-5">Group of Companies</p>
        </div>
      </Link>
      <Menu />
      <MobileMenu />
    </nav>
  );
}
