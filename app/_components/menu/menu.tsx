import React from "react";
import MenuItem from "./menu-item";

import { MENU_ITEMS } from "@/app/data";

export default function Menu() {
  return (
    <ul className="hidden md:flex  items-center gap-7 lg:gap-14">
      {MENU_ITEMS.map((menuItem, index) => (
        <MenuItem
          key={`menu-item-${index + 1}`}
          href={menuItem.href}
          title={menuItem.title}
        />
      ))}
    </ul>
  );
}
