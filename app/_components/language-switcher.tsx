"use client";
import React, { ReactNode, useState } from "react";
import { LANGUAGE_OPTIONS } from "../data";
import LanguageIcon from "./icons/language-icon";

type LanguageOptionProps = {
  id: string;
  title: string;
  current: string;
};

function LanguageOption({ id, title, current }: LanguageOptionProps) {
  return (
    <span className="flex">
      <label
        className="hover:bg-slate-300 px-4 py-2 w-full cursor-pointer"
        htmlFor={id}
      >
        {title}
      </label>
      <input
        className="hidden"
        type="radio"
        id={id}
        name={title}
        checked={current === id}
      />
    </span>
  );
}

function LanguageOptions({ children }: { children: ReactNode }) {
  return (
    <ul
      className="absolute top-7 -translate-x-3/4 bg-slate-50 
			text-slate-950 left-0 rounded-lg overflow-hidden"
    >
      {children}
    </ul>
  );
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(LANGUAGE_OPTIONS[0].id);

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)}>
        <LanguageIcon size={18} />
      </button>
      {open && (
        <LanguageOptions>
          {LANGUAGE_OPTIONS.map((option) => (
            <li key={`${option.id}-language-option`}>
              <LanguageOption
                current={option.id}
                id={option.id}
                title={option.title}
              />
            </li>
          ))}
        </LanguageOptions>
      )}
    </div>
  );
}
