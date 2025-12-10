import { Header, Hero, Features, Preview, Pricing, Footer } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Preview />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
