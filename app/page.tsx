import AboutSection from "./components/about";
import { Hero } from "./components/hero";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      {/* <HorizontalGallery/> */}
      <AboutSection />
    </main>
  );
}
