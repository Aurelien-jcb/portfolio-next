"use client";

import { siteInformations } from "@/app/lib/data";
import { useGetInitials } from "@/app/lib/utils/useGetInitials";
import { useScrollEffect } from "@/app/lib/utils/useScrollEffect";
import Link from "next/link";
import { useState } from "react";
import BurgerButton from "./burger-button";
import MarqueeBanner from "./marquee-banner";
import NavLinks from "./nav-links";
import styles from "./styles.module.scss";

const Header = () => {
  const [userIsScrolling, setUserIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useScrollEffect(setUserIsScrolling);
  const nameInitials = useGetInitials(siteInformations.name);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {userIsScrolling ? nameInitials : siteInformations.name}
        </Link>
      </div>
      <MarqueeBanner availibility={siteInformations.availibility} />
      <NavLinks links={siteInformations.navigation} status={isOpen} />
      <BurgerButton status={isOpen} action={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
