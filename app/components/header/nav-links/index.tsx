import Link from "next/link";
import styles from './style.module.scss'

export async function NavLinks() {
  const navLinks = [
    { id: 1, url: "#projects", label: "projects" },
    { id: 2, url: "#about", label: "about" },
    { id: 3, url: "#contact", label: "let's chat" },
  ];
  return (
    <nav className={styles.nav}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.url} passHref>
              {link.label}
            </Link>
          </li>
        ))}
        </ul>
    </nav>
  );
}
