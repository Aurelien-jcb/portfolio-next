import AboutSection from "./components/about";
import { ContactSection } from "./components/contact";
import { Hero } from "./components/hero";
import Portfolio from "./components/portfolio";
import { SocialLinks } from "./components/shared/social-links";
export default function Home() {
  return (
    <main>
      <Hero />
      <SocialLinks />
      <Portfolio />
      {/* <HorizontalGallery/> */}
      {/*       <HorizontalPortfolio />*/}
      <AboutSection />
    </main>
  );
}
