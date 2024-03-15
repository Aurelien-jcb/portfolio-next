"use client";
import glassElement from "@/app/lib/assets/images/hero-glass.png";
import { about } from "@/app/lib/data";
import { coiny, klavikaLight } from "@/app/lib/fonts";
import Image from "next/image";
import { ScrollToNextSectionIcon } from "../../shared/scroll-to-next-section-icon";
import styles from "./styles.module.scss";

export function Description({
  sectionRef,
}: {
  sectionRef: React.LegacyRef<HTMLDivElement>;
}) {
  return (
    <div className={styles.descriptionContainer} ref={sectionRef}>
      <Image
        className={styles.descriptionGlass}
        src={glassElement}
        alt="Glass picture"
        width={300}
        height={380}
      />
      <p className={`${styles.firstParagraph} ${klavikaLight.className}`}>
        {about.leftText.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </p>
      <p className={`${styles.secondParagraph} ${coiny.className}`}>
        {about.centerText}
      </p>
      <p className={`${styles.thirdParagraph} ${klavikaLight.className}`}>
        {about.rightText.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </p>
      <ScrollToNextSectionIcon />
    </div>
  );
}
