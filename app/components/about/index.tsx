"use client";

import { about } from "@/app/lib/data";
import { klavikaBold, klavikaLight } from "@/app/lib/fonts";
import Image from "next/image";
import { useRef } from "react";
import Button from "../shared/button";
import { ScrollToNextSectionIcon } from "../shared/scroll-to-next-section-icon";
import styles from "./styles.module.scss";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section className={styles.wrapper}>
      <div className={styles.profil}>
        <div className={styles.leftSection}>
          <p className={klavikaBold.className}>Hello!</p>
          <h3 className={klavikaLight.className}>
            I’m Aurélien, a 29 years-old <br />
            <b>Front-end Developper</b> based in {""}
            <span>France</span>
          </h3>
          {/* <h3 className={klavikaMedium.className}>{about.title}</h3> */}
          <Button scrollToRef={sectionRef}>{about.cta.label}</Button>
        </div>
        <div className={styles.rightSection}>
          <Image
            className={styles.profilePicture}
            width={540}
            height={100}
            alt={about.picture.alt}
            src={about.picture.url}
          />
        </div>
      </div>
      <ScrollToNextSectionIcon />
      <div className="description" ref={sectionRef}>
        <p className="left">{about.leftText}</p>
        <p className="center">{about.centerText}</p>
        <p className="right">{about.rightText}</p>
      </div>
    </section>
  );
};

export default AboutSection;
