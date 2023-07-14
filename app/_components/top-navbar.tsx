import Link from "next/link";
import React from "react";

export default function TopNavbar() {
  return (
    <div className="py-3 text-sm bg-white/5">
      <div className="container flex items-center justify-between">
        <div>
          <ul className="flex items-center gap-8">
            <li>
              <span className="text-neutral-400">Phone: </span>
              <Link
                href="tel:+380482345355"
                className="hover:text-violet-400 duration-150"
              >
                +38 (0482) 345 355
              </Link>
            </li>
            <li>
              <span className="text-neutral-400">Email: </span>
              <Link
                href="mailto:marlena@renome-i.net"
                className="hover:text-violet-400 duration-150"
              >
                marlena@renome-i.net
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex items-center gap-8">
          <li>Language</li>
          <li>Color</li>
        </ul>
      </div>
    </div>
  );
}
