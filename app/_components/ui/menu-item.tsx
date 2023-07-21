import Link from "next/link";

type MenuItemProps = {
  href: string;
  title: string;
}

export default function MenuItem({href, title}: MenuItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-violet-400 text-xl md:text-base duration-150"
      >
        {title}
      </Link>
    </li>
  );
}
