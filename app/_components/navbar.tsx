import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lateef } from "next/font/google";

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
      <ul className="flex items-center gap-14">
        <li>
          <Link href="/" className="hover:text-violet-400 duration-150">
            Главная
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-violet-400 duration-150">
            О компании
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-violet-400 duration-150">
            Услуги
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-violet-400 duration-150">
            Галерея
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-violet-400 duration-150">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
