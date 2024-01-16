import { Suspense } from "react";
import { NavLinks } from "../nav-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/">Aurelien Jacob</Link>
      <Suspense>
        <NavLinks />
      </Suspense>
    </div>
  );
}
