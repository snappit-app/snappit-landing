import { FeaturesSection, Footer, HeroSection, RoadmapSection, ThemeToggle } from "./components";
import { LightRaysContainer } from "./components/LightRays";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LightRaysContainer />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <HeroSection />
      <FeaturesSection />
      {/*<RoadmapSection />*/}
      <Footer />
    </main>
  );
}
