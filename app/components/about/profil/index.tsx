"use client";
import { about } from "@/app/lib/data";
import { klavikaBold, klavikaLight } from "@/app/lib/fonts";
import Image from "next/image";
import Button from "../../shared/button";
import styles from "./styles.module.scss";

export function Profil({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement>;
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <p className={klavikaBold.className}>Hello!</p>
        <h3 className={klavikaLight.className}>
          I’m Aurélien, a 29 years-old <br />
          <b>Front-end Developper</b> based in {""}
          <span>France</span>
        </h3>
        {/* <h3 className={klavikaMedium.className}>{about.title}</h3> */}
        <Button scrollToRef={sectionRef}>{about.cta.label}</Button>
      </div>
      <div className={styles.pictureWrapper}>
        <Image
          className={styles.picture}
          width={540}
          height={100}
          alt={about.picture.alt}
          src={about.picture.url}
        />
      </div>
    </div>
  );
}
