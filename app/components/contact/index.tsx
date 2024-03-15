"use client";
import { contactIcon } from "@/app/lib/icons";
import Image from "next/image";
import { contact } from "../../lib/data";
import Button from "../shared/button";
import styles from "./styles.module.scss";
import glassElement from "@/app/lib/assets/images/hero-glass.png";

export const ContactSection = () => {
  return (
    <section className={styles.contactWrapper}>
      <Image
        className={styles.contactGlass}
        src={glassElement}
        alt="Glass picture"
        width={300}
        height={380}
      />
      <p>{contact.overTitle}</p>
      <h3>{contact.title}</h3>
      <Button>{contact.cta.label}</Button>
      <Image
        className={styles.contactIcon}
        src={contactIcon}
        alt="vector icon"
        width={229}
        height={179}
      />
    </section>
  );
};
