"use client";

import { useRef } from "react";
import { Description } from "./description";
import { Profil } from "./profil";
import styles from "./styles.module.scss";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.about}>
      <Profil sectionRef={sectionRef} />
      {/* <ScrollSection> */}
      <Description sectionRef={sectionRef}></Description>
      {/* </ScrollSection> */}
    </section>
  );
};

export default AboutSection;
