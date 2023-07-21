import React, { ReactNode } from "react";
import MenuItem from "./ui/menu-item";

import { MENU_ITEMS } from "@/app/data";

function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <ul className="hidden md:flex  items-center gap-7 lg:gap-14">{children}</ul>
  );
}

export default function Menu() {
  return (
    <MenuContainer>
      {MENU_ITEMS.map((menuItem, index) => (
        <MenuItem
          key={`menu-item-${index + 1}`}
          href={menuItem.href}
          title={menuItem.title}
        />
      ))}
    </MenuContainer>
  );
}
