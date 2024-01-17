import Link from "next/link";
import styles from "./styles.module.scss";
import { NavLink } from "@/app/lib/definitions";

interface NavLinksProps {
  links: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  if (!links.length) {
    return null;
  }

  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul key={"nav-links"}>
        {links.map(({ id, url, label }) => (
          <li key={id}>
            <Link href={url} passHref target="_blank">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
