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
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          /*  markers: true, */
        },
      }
    );
    return () => {
      pin.kill();
    };
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
