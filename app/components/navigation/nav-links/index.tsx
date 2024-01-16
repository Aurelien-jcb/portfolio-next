import Link from "next/link";
import getMenuEntries from "@/app/lib/services/navbar";

export async function NavLinks() {
  const navLinks = await getMenuEntries();
  return (
    <ul>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.url as string} passHref>
              {link.label as string}
            </Link>
          </li>
        ))}
      </ul>
    </ul>
  );
}
