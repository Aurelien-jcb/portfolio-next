import { useEffect } from "react";

type UseScrollEffectType = (setScrolling: React.Dispatch<React.SetStateAction<boolean>>) => void;

export const useScrollEffect: UseScrollEffectType = (setScrolling) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrolling]);
};