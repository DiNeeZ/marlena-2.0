"use client";
import React from "react";
import LanguageIcon from "./icons/language-icon";
import { useOutsideClick } from "../_hooks";
import { LANGUAGE_OPTIONS } from "../data";

type LanguageOptionProps = {
  id: string;
  title: string;
  current: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type OptionsContainerProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function LanguageOption(props: LanguageOptionProps) {
  const { id, title, current, setOption, setOpen } = props;
  const isCheked = current === id;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.id);
    setOpen(false);
  };

  const optionLabelClass = `
    ${isCheked && "pointer-events-none opacity-50"} w-full 
    px-8 py-4 md:px-4 md:py-2 text-xl md:text-base text-slate-900 
    font-semibold md:font-normal cursor-pointer hover:bg-slate-300`;

  return (
    <span className="flex">
      <label className={optionLabelClass} htmlFor={id}>
        {title}
      </label>
      <input
        className="hidden"
        type="radio"
        id={id}
        name={title}
        checked={isCheked}
        disabled={isCheked}
        onChange={handleChange}
      />
    </span>
  );
}

function OptionsContainer({ children, open, setOpen }: OptionsContainerProps) {
  const ref = React.useRef(null);
  useOutsideClick(() => setOpen(false), ref);

  const containerClass = `
    ${open ? "grid-rows-[1fr] visible" : "grid-rows-[0fr] invisible"} 
    grid absolute top-0 left-0 md:top-7 -translate-y-[calc(100%+1rem)] 
    md:translate-y-0  md:-translate-x-3/4 bg-slate-50 text-slate-950 
    rounded-lg overflow-hidden duration-150`;

  return (
    <div className={containerClass}>
      <ul ref={ref} className="min-h-0">
        {children}
      </ul>
    </div>
  );
}

export default function LanguageSwitcher() {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(LANGUAGE_OPTIONS[0].id);

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)}>
        <LanguageIcon size={18} />
      </button>
      <OptionsContainer open={open} setOpen={setOpen}>
        {LANGUAGE_OPTIONS.map((item) => (
          <li key={`${item.id}-language-option`}>
            <LanguageOption
              setOption={setOption}
              setOpen={setOpen}
              current={option}
              id={item.id}
              title={item.title}
            />
          </li>
        ))}
      </OptionsContainer>
    </div>
  );
}
