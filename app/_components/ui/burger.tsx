import React from "react";

type BurgerProps = {
  toogleMenu: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
  ariaControls: string;
};

export default function Burger(props: BurgerProps) {
  const { toogleMenu, open, ariaControls } = props;

  return (
    <button
      aria-label={open ? "close menu" : "open menu"}
      aria-expanded={open}
      aria-controls={ariaControls}
      className={`${open ? "z-30 gap-0 rounded-full px-2 py-4" : "gap-1 p-2"} 
        w-11 flex flex-col outline-none focus-visible:border`}
      onClick={toogleMenu}
    >
      <span
        className={`block bg-slate-300 w-full h-[3px] rounded ${
          open && "rotate-45 translate-y-1/2"
        } duration-300`}
      />
      <span
        className={` 
        ${
          !open
            ? "visible opacity-100"
            : "invisible opacity-0 rotate-45 -translate-y-1"
        }
        block bg-slate-300 w-full rounded h-[3px] duration-300`}
      />
      <span
        className={`block bg-slate-300 w-full h-[3px] rounded ${
          open && "-rotate-45 -translate-y-1"
        } duration-300`}
      />
    </button>
  );
}
