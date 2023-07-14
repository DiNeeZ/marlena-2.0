"use client";

import Link from "next/link";
import React, { useState } from "react";
import Burger from "./ui/burger";
import CloseBtn from "./ui/close-btn";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden">
      <Burger openMenu={() => setOpen(true)} />
      <div
        className={`
					${
            open ? "translate-x-0 visible" : "translate-x-[100%] invisible"
          } fixed flex items-center justify-center top-0 right-0 z-20 
					bg-slate-950 w-[100vw] sm:w-[80vw] h-screen border-l border-slate-800 duration-300
				`}
      >
        <CloseBtn
          className="absolute top-8 right-8"
          closeMenu={() => setOpen(false)}
        />
        <ul className="flex flex-col  items-center gap-7 lg:gap-14">
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
      </div>
    </div>
  );
}
