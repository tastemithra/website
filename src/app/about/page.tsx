import type { Metadata } from 'next';
import React from "react";

import { Navbar } from "@/components/Navbar";
import { Anniversary } from "@/components/Anniversary";
import { Philosophy } from "@/components/Philosophy";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: 'About Us | Taste Mithra — Our Story, Philosophy & Journey',
  description:
    'Learn the story of Taste Mithra — founded in 2021, built on the belief that we only sell what we eat. Discover our milestones, values, and commitment to purity.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="main-content-flow" style={{ paddingTop: '80px' }}>
        <Anniversary />
        <Philosophy />
      </main>
      <Footer />
    </>
  );
}
