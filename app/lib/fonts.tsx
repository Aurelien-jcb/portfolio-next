import { Coiny } from "next/font/google";
import localFont from "next/font/local";

export const coiny = Coiny({
  subsets: ["latin"],
  weight:"400",
});
export const kinship = localFont({
  src: "./assets/KinshipSans-300.woff",
  display: "swap",
  weight: "300"
});

