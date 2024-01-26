import { chevronBottomIcon } from "@/app/lib/icons";
import Image from "next/image";
import styles from "./styles.module.scss";

export function ScrollToNextSectionIcon() {
  return (
    <Image
      className={styles.icon}
      src={chevronBottomIcon}
      alt="Icon"
      width={57}
      height={40}
    />
  );
}
