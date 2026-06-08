"use client";

import React from 'react';
import Image from 'next/image';

export const AboutSnippet: React.FC = () => {
  return (
    <section className="about-snippet-section">
      {/* Seamless Double-Buffered Scrolling Ribbon */}
      <div className="scrolling-ribbon-wrapper">
        <div className="marquee-track">
          <div className="marquee-scroll">
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
          </div>
          <div className="marquee-scroll" aria-hidden="true">
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
            <span>FRESH INGREDIENTS • MADE DAILY • LOVED BY 10,000+ CUSTOMERS • NO ARTIFICIAL ADDITIVES • 100% PURE & NATURAL • &nbsp;</span>
          </div>
        </div>
      </div>

      <div className="container about-snippet-container">
        {/* Left Column: Blob/Circle Image with Rotating Dashed Ring */}
        <div className="about-snippet-visual animate-fade-in">
          <div className="about-visual-container">
            <div className="rotating-dashed-ring"></div>
            <div className="about-circle-wrapper">
              <Image
                src="/images/about_circle.png"
                alt="Taste Mithra Fresh Ingredients"
                width={420}
                height={420}
                className="about-circle-img"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Copywriting */}
        <div className="about-snippet-content animate-fade-in">
          <div className="about-badge">
            <span className="badge-dot"></span>
            About us
            <span className="badge-dot"></span>
          </div>
          <h2 className="about-title">A Legacy of Trust, Purity & Taste!</h2>
          <p className="about-desc">
            Founded on May 15, 2021, Taste Mithra delivers the purest, healthiest, and highest-quality food products to your kitchen. Today, we proudly celebrate 5+ years of serving our community and becoming a household name trusted by families.
          </p>

          {/* Premium Bullet Highlights */}
          <ul className="about-features-list">
            <li>
              <span className="feat-bullet">✓</span>
              First-Quality Raw Materials
            </li>
            <li>
              <span className="feat-bullet">✓</span>
              Crafted from 100% First-Grade Unsulphured Copra
            </li>
            <li>
              <span className="feat-bullet">✓</span>
              Pure Whole Masalas with Zero Starch
            </li>
            <li>
              <span className="feat-bullet">✓</span>
              Triple-Cleaned Grains & Flour Products
            </li>
          </ul>

          <a href="/about" className="pill-nav-btn story-btn">
            Our Story
          </a>
        </div>
      </div>

      {/* Bottom Wave decoration matching reference image */}
      <div className="section-wave-decor">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="#FFDF00" />
        </svg>
      </div>

      <style>{`
        .about-snippet-section {
          background-color: #ffffff;
          position: relative;
          padding: 0 0 100px 0;
          overflow: hidden;
        }

        /* Top Ribbon Banner - straight and infinite scrolling */
        .scrolling-ribbon-wrapper {
          background-color: #0E8B5A;
          padding: 14px 0;
          overflow: hidden;
          width: 100%;
          border-top: 2px solid #222222;
          border-bottom: 2px solid #222222;
          margin-top: 0;
          margin-bottom: 60px;
          box-shadow: 0 8px 0px rgba(0, 0, 0, 0.05);
          display: flex;
          position: relative;
          z-index: 10;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scrollMarquee 45s linear infinite;
        }

        .marquee-scroll {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .marquee-scroll span {
          font-family: var(--font-heading);
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .about-snippet-container {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 5;
        }

        .about-snippet-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-visual-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Rotating dashed outline ring */
        .rotating-dashed-ring {
          position: absolute;
          width: 110%;
          height: 110%;
          border: 2px dashed var(--primary);
          border-radius: 58% 42% 52% 48% / 44% 52% 48% 56%;
          animation: rotateDashedRing 28s linear infinite;
          pointer-events: none;
        }

        @keyframes rotateDashedRing {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .about-circle-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%; /* Organic Blob shape from image */
          border: 3.5px solid var(--primary);
          overflow: hidden;
          box-shadow: 0 16px 0px rgba(14, 139, 90, 0.12);
          background: #ffffff;
          transition: all 0.4s ease;
          z-index: 2;
        }

        .about-circle-wrapper:hover {
          transform: rotate(3deg) scale(1.02);
          box-shadow: 0 22px 0px rgba(14, 139, 90, 0.18);
        }

        .about-circle-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-snippet-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Floating diamond badge style */
        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #000000;
          background: transparent;
          border: none;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-bottom: 24px;
        }

        .badge-dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, #0E8B5A, #5ed081);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: badgeDiamondAnim 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          flex-shrink: 0;
        }

        @keyframes badgeDiamondAnim {
          0% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 2px rgba(14, 139, 90, 0.3)); }
          50% { transform: scale(1.25) rotate(180deg); filter: drop-shadow(0 0 8px rgba(14, 139, 90, 0.8)); }
          100% { transform: scale(1) rotate(360deg); filter: drop-shadow(0 0 2px rgba(14, 139, 90, 0.3)); }
        }

        .about-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 850;
          line-height: 1.2;
          color: var(--primary);
          margin-bottom: 20px;
        }

        .about-desc {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          color: #222222;
          margin-bottom: 24px;
        }

        /* Features Bullet List */
        .about-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 34px;
        }

        .about-features-list li {
          font-family: var(--font-body);
          font-size: 1.02rem;
          font-weight: 700;
          color: #222222;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feat-bullet {
          color: var(--primary);
          font-weight: 900;
          font-size: 1.2rem;
        }

        .story-btn {
          background: #FFDF00 !important;
          color: #000000 !important;
          border: 2px solid #222222 !important;
          box-shadow: 0 4px 0px #222222 !important;
          font-size: 0.85rem !important;
          padding: 10px 24px !important;
        }

        .story-btn:hover {
          background: #FF7A00 !important;
          color: #000000 !important;
          box-shadow: 0 6px 0px #222222 !important;
        }

        /* Bottom Wave */
        .section-wave-decor {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          line-height: 0;
          z-index: 1;
        }

        .section-wave-decor svg {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 900px) {
          .about-snippet-container {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .about-snippet-content {
            align-items: center;
          }

          .about-circle-wrapper {
            max-width: min(85vw, 360px);
          }

          .scrolling-ribbon-wrapper {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};
