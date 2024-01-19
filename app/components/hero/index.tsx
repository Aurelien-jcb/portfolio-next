import Image from "next/image";
import styles from "./styles.module.scss";
import { klavikaBold, klavikaLight } from "@/app/lib/fonts";
import { chevronBottomIcon } from "@/app/lib/icons";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={klavikaBold.className}>Independent Front-end developer</h1>
      <p className={klavikaLight.className}>From Lille, France</p>
      <Image className={styles.icon} src={chevronBottomIcon} alt="Icon" width={57} height={40}/>
    </div>
  );
};

export default Hero;
