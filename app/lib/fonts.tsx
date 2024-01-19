import { Coiny } from "next/font/google";
import localFont from "next/font/local";

export const coiny = Coiny({
  subsets: ["latin"],
  weight: "400",
});
export const kinship = localFont({
  src: "./assets/fonts/KinshipSans-300.woff",
  display: "swap",
  weight: "300",
});

export const klavikaLight = localFont({
  src: "./assets/fonts/klavika-light.woff2",
  display: "swap",
  weight: "300",
});

export const klavikaMedium = localFont({
  src: "./assets/fonts/klavika-medium.woff2",
  display: "swap",
  weight: "500",
});

export const klavikaBold = localFont({
  src: "./assets/fonts/klavika-bold.woff2",
  display: "swap",
  weight: "700",
});
