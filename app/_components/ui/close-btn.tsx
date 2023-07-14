import React from "react";

type CloseBtnProps = {
  closeMenu: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function CloseBtn({ closeMenu, className }: CloseBtnProps) {
  return (
    <button
      className={`${className} w-7 flex flex-col justify-between`}
      onClick={closeMenu}
    >
      <span className="block bg-slate-300 w-full h-[3px] rounded rotate-45 relative top-[3px]" />
      <span className="block bg-slate-300 w-full h-[3px] rounded -rotate-45" />
    </button>
  );
}
