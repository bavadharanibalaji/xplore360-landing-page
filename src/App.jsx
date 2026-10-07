import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Lenis from "lenis";

import Navbar from "./components/navbar/Navbar";
import Reveal from "./components/shared/Reveal";
import Hero from "./components/hero/Hero";
import Workflow from "./components/workflow/Workflow";
import Modules from "./components/modules/Modules";
import Journey from "./components/journey/Journey";
import Industries from "./components/industries/Industries";
import Implementation from "./components/implementation/Implementation";
import ProductTour from "./components/productTour/ProductTour";
import FeatureHighlights from "./components/featureHighlights/FeatureHighlights";
import DemoVideo from "./components/demoVideo/DemoVideo";
// import Pricing from './components/pricing/Pricing';
import Transformation from "./components/transformation/Transformation";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import FloatingContact from "./components/floatingContact/FloatingContact";

import DemoDialog from "./components/demo/DemoDialog";

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const [hasTriggered30, setHasTriggered30] = useState(false);
  const [hasTriggered75, setHasTriggered75] = useState(false);

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();

   useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  if (latest >= 0.3 && !hasTriggered30) {
    setIsDemoOpen(true);
    setHasTriggered30(true);
  }
  if (latest >= 0.75 && !hasTriggered75) {
    setIsDemoOpen(true);
    setHasTriggered75(true);
  }
});

  return (
    <>
      <Navbar />
      <main>
        {/* Hero animates in on load, not on scroll — it's already visible */}
        <Hero />

        {/* Every section below fades + slides in the moment it
            scrolls into view, driven purely by the scroll event
            rather than a fixed timer. */}
        <Reveal>
          <Workflow />
        </Reveal>
        <Reveal>
          <Modules />
        </Reveal>
        <Reveal>
          <Journey />
        </Reveal>
        <Reveal>
          <Industries />
        </Reveal>
        <Reveal>
          <DemoVideo />
        </Reveal>
        <Reveal>
          <Implementation />
        </Reveal>
        <Reveal>
          <ProductTour />
        </Reveal>
        <Reveal>
          <FeatureHighlights />
        </Reveal>
        {/* <Pricing /> */}
        <Reveal>
          <Transformation />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>

      <DemoDialog isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

      <FloatingContact
        whatsappNumber="919025784560"
        phoneNumber="+919025784560"
      />
    </>
  );
}

export default App;
