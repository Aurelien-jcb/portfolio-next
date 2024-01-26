"use client";

import { useRef } from "react";
import { ScrollToNextSectionIcon } from "../shared/scroll-to-next-section-icon";
import { Description } from "./description";
import { Profil } from "./profil";
import styles from "./styles.module.scss";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.wrapper}>
      <Profil sectionRef={sectionRef}></Profil>
      <ScrollToNextSectionIcon />
      <Description sectionRef={sectionRef}></Description>
    </section>
  );
};

export default AboutSection;
