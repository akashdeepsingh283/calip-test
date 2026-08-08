import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Benefits from "./components/Benefits";
import WhyUs from "./components/WhyUs";
import FAQPreview from "./components/FAQPreview";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { generatePageMetadata } from "./lib/seo";

export const metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <>
      <JsonLd page="home" />
      <BackgroundEffects />
      <Navbar />
      <main className="relative pt-32 page-enter">
        <Hero />
        <WhatWeDo />
        <Benefits />
        <FAQPreview />
      </main>
      <GetInTouch />
      <Footer />
    </>
  );
}