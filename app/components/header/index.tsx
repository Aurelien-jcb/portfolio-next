'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { siteInformations } from "@/app/lib/data";
import NavLinks from "./nav-links";
import MarqueeBanner from "./marquee-banner";
import { useScrollEffect } from "@/app/lib/utils/useScrollEffect";
import { useGetInitials } from "@/app/lib/utils/useGetInitials";

const Header = () => {
 const [scrolling, setScrolling] = useState(false);
 useScrollEffect(setScrolling);
 const initials = useGetInitials(siteInformations.name);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">{scrolling ? initials:  siteInformations.name}</Link>
      </div>
      <MarqueeBanner availibility={siteInformations.availibility} />
      <NavLinks links={siteInformations.navigation} />
    </header>
  );
};

export default Header;
