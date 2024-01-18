"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { siteInformations } from "@/app/lib/data";
import NavLinks from "./nav-links";
import MarqueeBanner from "./marquee-banner";
import BurgerButton from "./burger-button";
import { useScrollEffect } from "@/app/lib/utils/useScrollEffect";
import { useGetInitials } from "@/app/lib/utils/useGetInitials";

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
