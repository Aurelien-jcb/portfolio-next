"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
function ScrollSection({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-280vw",
          ease: "none",
          duration: 0.5,
          scrollTrigger: {
            horizontal: true,
            trigger: triggerRef.current,
            start: "top top",
            end: "25000 top",
            pin: true,
            markers: false,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className={styles.scrollSectionOuter}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;

// "use client";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { useEffect, useRef } from "react";
// import styles from "./styles.module.scss";
// function ScrollSection({
//   children,
//   translateX = "-200vw",
//   duration = 2,
//   start = "top top",
//   end = "2000 top",
//   scrub = 0.6,
//   pin = true,
//   markers = true,
// }: {
//   children: React.ReactNode;
//   translateX?: string;
//   duration?: number;
//   start?: string;
//   end?: string;
//   scrub?: number;
//   pin?: boolean;
//   markers?: boolean;
// }) {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0,
//       },
//       {
//         translateX: translateX,
//         ease: "none",
//         duration: duration,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: start,
//           end: end,
//           scrub: scrub,
//           pin: pin,
//           markers: markers,
//         },
//       }
//     );
//     return () => {
//       pin.kill();
//     };
//   }, [translateX, duration, start, end, scrub, pin, markers]);

//   return (
//     <section className={styles.scrollSectionOuter}>
//       <div ref={triggerRef}>
//         <div ref={sectionRef} className={styles.scrollSectionInner}>
//           {children}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ScrollSection;
