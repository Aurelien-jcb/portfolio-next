import { chevronIcon } from "@/app/lib/icons";
import Image from "next/image";
import styles from "./styles.module.scss";

export function ScrollToNextSectionIcon() {
  return (
    <Image
      className={styles.chevronIcon}
      src={chevronIcon}
      alt="Bottom chevron icon"
      width={56}
      height={40}
    />
  );
}
