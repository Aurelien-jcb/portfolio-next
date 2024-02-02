"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrollEffect({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollEffect;
