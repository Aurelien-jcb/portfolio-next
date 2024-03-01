"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const HorizontalPortfolio = () => {
  const racesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const races: any = racesRef.current;
    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.fromTo(
      races,
      { x: 0 },
      {
        x: getScrollAmount(),
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".racesWrapper",
          start: "top 20%",
          end: "bottom bottom",
          pin: true,
          scrub: 0,
          invalidateOnRefresh: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className={styles.portfolioWrapper}>
      <div className="racesWrapper">
        <div ref={racesRef} className={styles.races}>
          <h2>Monaco</h2>
          <h2>Austria</h2>
          <h2>Hungary</h2>
          <h2>Netherlands</h2>
          <h2>Japan</h2>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPortfolio;
