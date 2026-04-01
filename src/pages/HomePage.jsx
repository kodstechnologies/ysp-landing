import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ProductModules from '../components/ProductModules';
import Benefits from '../components/Benefits';
import Preview from '../components/Preview';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden bg-white selection:bg-[#007BC9] selection:text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <ProductModules />
      <Benefits />
      <Preview />
      <Testimonials />
      {/* <Pricing /> */}
      <CTA />
    </div>
  );
}