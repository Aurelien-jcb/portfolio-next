import AboutSection from "./components/about";
import { Hero } from "./components/hero";
import { SocialLinks } from "./components/shared/social-links";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialLinks />
      {/* <Portfolio /> */}
      {/* <HorizontalGallery/> */}
      <AboutSection />
    </main>
  );
}
