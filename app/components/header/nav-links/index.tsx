import { NavLink } from "@/app/lib/definitions";
import Link from "next/link";
import styles from "./styles.module.scss";

interface NavLinksProps {
  links: NavLink[];
  status: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, status }) => {
  if (!links.length) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <nav
        className={status ? styles.openedMenu : ""}
        aria-label="Main navigation"
      >
        <ul key={"nav-links"}>
          {links.map(({ id, url, label }) => (
            <li key={id}>
              <span>{`0${id}.`}</span>
              <Link href={url} passHref>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
