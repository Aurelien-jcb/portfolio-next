import glassElement from "@/app/lib/assets/images/hero-glass.png";
import { klavikaBold, klavikaLight } from "@/app/lib/fonts";
import { chevronIcon, fillStarIcon } from "@/app/lib/icons";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={klavikaBold.className}>
          Independent Front-end developer
        </h1>
        <p className={klavikaLight.className}>From Lille, France</p>
      </div>

      <Image
        className={styles.glass}
        src={glassElement}
        alt="Glass picture"
        width={300}
        height={380}
      />
      <Image
        className={styles.chevronIcon}
        src={chevronIcon}
        alt="Bottom chevron icon"
        width={56}
        height={40}
      />
      <Image
        className={styles.fillStar}
        src={fillStarIcon}
        alt="Fill star icon"
        width={126}
        height={126}
      />
    </div>
  );
};
