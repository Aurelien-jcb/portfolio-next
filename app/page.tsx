import AboutSection from "./components/about";
import { Hero } from "./components/hero";
import Portfolio from "./components/portfolio";
import { SocialLinks } from "./components/shared/social-links";
export default function Home() {
  return (
    <main>
      <Hero />
      <SocialLinks />
      <Portfolio />
      <AboutSection />
    </main>
  );
}
