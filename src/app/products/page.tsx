import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Products } from '@/components/Products';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Our Products | Taste Mithra",
  description: "Browse the full collection of Taste Mithra's premium kitchen products. 100% pure cold pressed coconut oil, aromatic masalas, seasonings, and grain flours.",
  keywords: "Taste Mithra products, pure coconut oil, puttu powder, chicken masala, sambar powder, grain flours",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="main-content-flow" style={{ paddingTop: '80px' }}>
        <Products isPage={true} />
      </main>
      <Footer />
    </>
  );
}
