"use client";

import Picture1 from "@/public/images/1.jpeg";
import Picture2 from "@/public/images/2.jpeg";
import Picture3 from "@/public/images/3.jpg";
import Picture4 from "@/public/images/4.jpg";
import Picture5 from "@/public/images/5.jpg";
import Picture6 from "@/public/images/6.jpg";
import Picture7 from "@/public/images/7.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const pictures = [
  { src: Picture1, scale: 4 },
  { src: Picture2, scale: 5 },
  { src: Picture3, scale: 6 },
  { src: Picture4, scale: 5 },
  { src: Picture5, scale: 6 },
  { src: Picture6, scale: 8 },
  { src: Picture7, scale: 9 },
];

const ZoomParallaxGallery = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    pictures.forEach(({ src, scale }, index) => {
      gsap.to(`#image-${index}`, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
        scale: scale,
      });
    });
  }, []);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <div key={index} className={styles.el}>
            <div className={styles.imageContainer} id={`image-${index}`}>
              <Image src={src} fill alt="image" placeholder="blur" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParallaxGallery;
