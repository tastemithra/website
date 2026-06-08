import type { Metadata } from 'next';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSnippet } from '@/components/AboutSnippet';
import { Products } from '@/components/Products';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Taste Mithra | Pure Kerala Products — Coconut Oil, Masalas & Flours',
  description:
    'Taste Mithra brings 100% pure coconut oil, authentic masala powders, and premium grain flours straight from Kerala kitchens to yours. We only sell what we eat.',
};

export default function Home() {
  return (
    <>
      {/* Premium Sticky Navigation */}
      <Navbar />

      {/* Main Single Page Content Flow */}
      <main className="main-content-flow">
        {/* Section 1: Dynamic Hero Banner */}
        <Hero />

        {/* Section 1.5: Short About Snippet */}
        <AboutSnippet />

        {/* Section 2: Premium Interactive Products Grid */}
        <Products />

        {/* Section 3: Pillars of Purity & Quality */}
        <WhyChooseUs />

        {/* Section 4: Contact Forms, Sincere Message, & Locations */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}

