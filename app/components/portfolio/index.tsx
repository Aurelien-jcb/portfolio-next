import { projects } from "@/app/lib/data";
import { kinship } from "@/app/lib/fonts";
import { chevronIcon, fullStarIcon } from "@/app/lib/icons";
import Image from "next/image";
import ScrollSection from "../scroll-section";
import styles from "./styles.module.scss";

export default function Portfolio() {
  return (
    <ScrollSection>
      <div className={styles.portfolio}>
        <h3 className={kinship.className}>
          Portfolio <br /> 2024
        </h3>
        <Image
          className={styles.star}
          src={fullStarIcon}
          alt="Full star picture"
          width={335}
          height={335}
        />
        <Image
          className={styles.chevron}
          src={chevronIcon}
          alt="chevron icon"
          width={39}
          height={27}
        />
      </div>
      <div className={styles.projets}>
        {projects.map((project) => {
          const imageUrl = project.thumbnail
            ? project.thumbnail.url
            : "/image.jpg";
          return (
            <div
              className={styles.projet}
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
              key={project.id}
            >
              <p>{project.client}</p>
            </div>
          );
        })}
      </div>
    </ScrollSection>
  );
}
