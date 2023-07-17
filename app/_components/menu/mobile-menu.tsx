"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import Image from "next/image";

import MenuItem from "./menu-item";
import Burger from "../ui/burger";

import useScrollLock from "@/app/_hooks/use-scroll-lock";
import { MENU_ITEMS } from "@/app/data";

import { Lateef } from "next/font/google";

const lateef = Lateef({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const { lockScroll, unlockScroll } = useScrollLock();

  const openMenu = () => {
    lockScroll();
    setOpen(true);
  };

  const closeMenu = () => {
    unlockScroll();
    setOpen(false);
  };

  return (
    <div className="flex md:hidden">
      <Burger
        ariaControls="mobile-menu"
        open={open}
        toogleMenu={open ? closeMenu : openMenu}
      />
      <div
        id="mobile-menu"
        className={`
					${
            open ? "translate-x-0 visible" : "translate-x-[100%] invisible"
          } fixed flex flex-col   top-0 right-0 z-20 bg-slate-950
					 w-[100vw] sm:w-[80vw] h-screen border-l border-slate-800 duration-300
				`}
      >
        <div className="flex items-center gap-2 px-8 py-6">
          <Image src="./logo.svg" width={20} height={20} alt="Marlena Logo" />
          <h2
            className={`${lateef.className} uppercase text-violet-400 text-3xl pt-1`}
          >
            Marlena
          </h2>
        </div>
        <div className="grow bg-slate-900 flex pt-16 pl-16">
          <ul className="flex flex-col  items-start gap-12 uppercase md:normal-case lg:gap-14">
            {MENU_ITEMS.map((menuItem, index) => (
              <MenuItem
                key={`mobile-menu-item-${index}`}
                href={menuItem.href}
                title={menuItem.title}
              />
            ))}
          </ul>
        </div>
        <div className="px-8 py-6">Footer MObile MEnu</div>
      </div>
    </div>
  );
}
