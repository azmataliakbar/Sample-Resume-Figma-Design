import Link from "next/link";
import "@fontsource/inter";

interface HeaderProps {
  font: string;
}

export default function Header({ font }: HeaderProps) {
  return (
    <div className={`${font} links-parent`}>
      <ul className="link">
        <li><Link href="/">Works</Link></li>
        <li><Link href="/">Blog</Link></li>
        <li><Link href="/">Contact</Link></li>
      </ul>
    </div>
  );
}
