import "@/app/styles/globals.scss";
import type { Metadata } from "next";
import Header from "./components/header";
import { kinship } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Aurélien Jacob",
  description: "Freelance web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kinship.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
