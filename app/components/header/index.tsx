import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { NavLinks } from "./nav-links";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Aurélien Jacob</Link>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
