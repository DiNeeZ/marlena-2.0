import Link from "next/link";

export default function MenuItem({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
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
