import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <ul className="hidden md:flex  items-center gap-7 lg:gap-14">
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
  );
}
