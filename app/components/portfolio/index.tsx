import { kinship } from "@/app/lib/fonts";
import { chevronIcon, fullStarIcon } from "@/app/lib/icons";
import Image from "next/image";
import styles from "./styles.module.scss";

// export default function HorizontalPortfolio() {
//   return (
//     <div classNameName="gallery">
//       <div classNameName="horizontal-scroll-wrapper">
//         {projects.map(({ project_name, thumbnail }, index) => (
//           <div key={index} classNameName="img-wrapper">
//             <Link href={`projets/${project_name}`}>
//               <Image
//                 classNameName="image"
//                 src={thumbnail.url}
//                 alt={thumbnail.alt}
//                 objectFit="contain"
//                 layout="fill"
//               />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Portfolio() {
  return (
    // <ScrollSection>
    //   <div className={styles.scrollSection}>
    //     <div className={styles.parent}>
    //       <h3>
    //         Portfolio <br /> 2024
    //       </h3>
    //       <div className={styles.div1}>dd </div>
    //       <div className={styles.div2}>d </div>
    //       <div className={styles.div3}>d </div>
    //       <div className={styles.div4}>d </div>
    //     </div>
    //   </div>
    // </ScrollSection>
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
  );
}