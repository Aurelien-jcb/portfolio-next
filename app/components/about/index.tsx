"use client";

import { useRef } from "react";
import { ContactSection } from "../contact";
import ScrollSection from "../scroll-section";
import { Description } from "./description";
import { Profil } from "./profil";
import styles from "./styles.module.scss";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.about}>
      <Profil sectionRef={sectionRef} />
      <ScrollSection>
        <Description sectionRef={sectionRef}></Description>
        <ContactSection />
      </ScrollSection>
    </section>
  );
};

export default AboutSection;
