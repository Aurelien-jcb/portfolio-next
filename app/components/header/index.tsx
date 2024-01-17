import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { siteInformations } from "@/app/lib/data";
import NavLinks from "./nav-links";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">{siteInformations.name}</Link>
      </div>
      <div>
        <p>{siteInformations.availibility}</p>
      </div>
      <NavLinks links={siteInformations.navigation} />
    </header>
  );
};

export default Header;
