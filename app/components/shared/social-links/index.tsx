import { instagramIcon, linkedinIcon } from "@/app/lib/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function SocialLinks() {
  return (
    <div className={styles.socialIcon}>
      <Link href="https://www.instagram.com">
        <Image
          src={instagramIcon}
          className={styles.instagramIcon}
          alt="Instagram icon"
          width={38}
          height={38}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/aurélien-jacob/">
        <Image src={linkedinIcon} alt="Linkedin icon" width={38} height={38} />
      </Link>
    </div>
  );
}
