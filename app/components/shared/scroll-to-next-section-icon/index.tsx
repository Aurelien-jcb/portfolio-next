import { chevronIcon } from "@/app/lib/icons";
import Image from "next/image";
import styles from "./styles.module.scss";

export function ScrollToNextSectionIcon() {
  return (
    <Image
      className={styles.icon}
      src={chevronIcon}
      alt="Icon"
      width={57}
      height={40}
    />
  );
}
