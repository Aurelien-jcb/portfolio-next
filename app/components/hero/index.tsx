import { klavikaBold, klavikaLight } from "@/app/lib/fonts";
import { fillStarIcon } from "@/app/lib/icons";
import Image from "next/image";
import { ScrollToNextSectionIcon } from "../shared/scroll-to-next-section-icon";
import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={klavikaBold.className}>Independent Front-end developer</h1>
      <p className={klavikaLight.className}>From Lille, France</p>
      <ScrollToNextSectionIcon />{" "}
      <Image
        className={styles.icon}
        src={fillStarIcon}
        alt="Fill star icon"
        width={126}
        height={126}
      />
    </div>
  );
};
