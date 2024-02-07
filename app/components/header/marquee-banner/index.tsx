import React from "react";
import styles from "./styles.module.scss";

interface MarqueeBannerProps {
  availibility: { available: string; notAvailable: string; status: boolean };
}

const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ availibility }) => {
  const getClassName = () => {
    return availibility.status ? "" : styles.notAvailable;
  };
  return (
    <div className={styles.wrapper}>
      <span className={getClassName()} />
      <div className={styles.marquee}>
        {[...Array(9)].map((_, index) => (
          <p key={`marqueeText-${index}`} className={styles.marqueeText}>
            {availibility.status
              ? `${availibility.available} `
              : `${availibility.notAvailable} `}
          </p>
        ))}
      </div>
      <span className={getClassName()} />
    </div>
  );
};

export default MarqueeBanner;
