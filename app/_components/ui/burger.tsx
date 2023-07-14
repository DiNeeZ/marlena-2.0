import React from "react";

type BurgerProps = {
  openMenu: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Burger({ openMenu }: BurgerProps) {
  return (
    <button className="w-7 flex flex-col gap-1" onClick={openMenu}>
      <span className="block bg-slate-300 w-full h-[3px] rounded" />
      <span className="block bg-slate-300 w-full h-[3px] rounded" />
      <span className="block bg-slate-300 w-full h-[3px] rounded" />
    </button>
  );
}
