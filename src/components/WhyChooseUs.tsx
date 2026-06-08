"use client";

import React from 'react';
import Image from 'next/image';

// Custom inline SVGs to match the high-quality 3D-ish illustrations in the reference image
const OrganicIcon: React.FC = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="leafGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#159957" />
        <stop offset="100%" stopColor="#15b565" />
      </linearGradient>
      <linearGradient id="leafGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3ca55c" />
        <stop offset="100%" stopColor="#5ed081" />
      </linearGradient>
      <linearGradient id="swooshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3498db" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#1abc9c" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#2ecc71" stopOpacity="0.1" />
      </linearGradient>
      <filter id="iconShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
      </filter>
    </defs>

    {/* Blue/Teal swoosh background */}
    <path d="M12 28 C 12 18, 22 10, 32 14 C 38 16.5, 40 22, 38 28 C 36 34, 28 38, 20 36 C 14 34.5, 12 30, 12 28"
      stroke="url(#swooshGrad)" strokeWidth="2" strokeLinecap="round" fill="none" filter="url(#iconShadow)" />
    <path d="M16 24 C 18 16, 26 12, 34 16 C 36 17.5, 38 20, 37 24 C 35 28, 29 32, 22 30"
      stroke="url(#swooshGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 2" />

    {/* Large Leaf */}
    <path d="M22 28 C 22 28, 26 16, 36 16 C 36 16, 36 26, 26 30 C 24 30.8, 22.5 29.5, 22 28 Z"
      fill="url(#leafGrad1)" filter="url(#iconShadow)" />
    <path d="M22 28 C 25 24, 30 20, 36 16"
      stroke="#0d703e" strokeWidth="1.2" strokeLinecap="round" />

    {/* Small Leaf */}
    <path d="M22 28 C 22 28, 14 22, 18 14 C 18 14, 24 18, 22 26 C 21.7 27.2, 22 27.8, 22 28 Z"
      fill="url(#leafGrad2)" filter="url(#iconShadow)" />
    <path d="M22 28 C 20.5 24.5, 19 20, 18 14"
      stroke="#2d8547" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const ProcessIcon: React.FC = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="starGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd861" />
        <stop offset="100%" stopColor="#fca72a" />
      </linearGradient>
      <linearGradient id="starGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff7b00" />
        <stop offset="100%" stopColor="#ffb03a" />
      </linearGradient>
      <linearGradient id="starGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffaa43" />
        <stop offset="100%" stopColor="#ffd275" />
      </linearGradient>
      <filter id="starGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Large Star */}
    <path d="M21 31 C 21 26, 17 22, 12 22 C 17 22, 21 18, 21 13 C 21 18, 25 22, 30 22 C 25 22, 21 26, 21 31 Z"
      fill="url(#starGrad2)" filter="url(#starGlow)" />

    {/* Medium Star (Top Right) */}
    <path d="M34 20 C 34 17, 31 14, 28 14 C 31 14, 34 11, 34 8 C 34 11, 37 14, 40 14 C 37 14, 34 17, 34 20 Z"
      fill="url(#starGrad1)" filter="url(#starGlow)" />

    {/* Small Star (Bottom Right) */}
    <path d="M31 35 C 31 33, 29 31, 27 31 C 29 31, 31 29, 31 27 C 31 29, 33 31, 35 31 C 33 31, 31 33, 31 35 Z"
      fill="url(#starGrad3)" />
  </svg>
);

const MedalIcon: React.FC = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe569" />
        <stop offset="100%" stopColor="#f39c12" />
      </linearGradient>
      <linearGradient id="blueRibbon" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#54a0ff" />
        <stop offset="100%" stopColor="#2e86de" />
      </linearGradient>
      <filter id="medalShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.2" />
      </filter>
    </defs>

    {/* Ribbon Tails */}
    <path d="M18 24 L14 38 L20 35 L23 28 Z" fill="url(#blueRibbon)" filter="url(#medalShadow)" />
    <path d="M30 24 L34 38 L28 35 L25 28 Z" fill="url(#blueRibbon)" filter="url(#medalShadow)" />

    {/* Ribbon Loop */}
    <path d="M16 16 C 16 11, 32 11, 32 16 L28 25 L20 25 Z" fill="url(#blueRibbon)" />

    {/* Gold Medal Circle */}
    <circle cx="24" cy="27" r="10" fill="url(#goldGrad)" stroke="#d35400" strokeWidth="1" filter="url(#medalShadow)" />
    <circle cx="24" cy="27" r="8" fill="none" stroke="#fff" strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.7" />

    {/* Number 1 in center */}
    <text x="24" y="31" fontFamily="sans-serif" fontSize="11" fontWeight="900" fill="#d35400" textAnchor="middle">1</text>
  </svg>
);

const SeedlingIcon: React.FC = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="soilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8d6e63" />
        <stop offset="100%" stopColor="#5d4037" />
      </linearGradient>
      <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a5d6a7" />
        <stop offset="100%" stopColor="#4caf50" />
      </linearGradient>
      <linearGradient id="leafGradL" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4caf50" />
        <stop offset="100%" stopColor="#81c784" />
      </linearGradient>
      <linearGradient id="leafGradR" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#2e7d32" />
        <stop offset="100%" stopColor="#66bb6a" />
      </linearGradient>
      <filter id="seedlingShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodOpacity="0.15" />
      </filter>
    </defs>

    {/* Soil Mound */}
    <path d="M14 36 C 14 30, 34 30, 34 36 Z" fill="url(#soilGrad)" filter="url(#seedlingShadow)" />

    {/* Stem */}
    <path d="M24 34 L24 20" stroke="url(#stemGrad)" strokeWidth="3" strokeLinecap="round" />

    {/* Left Leaf */}
    <path d="M24 24 C 24 24, 13 22, 14 15 C 21 15, 24 21, 24 24 Z" fill="url(#leafGradL)" filter="url(#seedlingShadow)" />
    <path d="M24 24 C 20 21, 16 18, 14 15" stroke="#1b5e20" strokeWidth="0.8" />

    {/* Right Leaf */}
    <path d="M24 22 C 24 22, 33 19, 32 12 C 26 13, 24 19, 24 22 Z" fill="url(#leafGradR)" filter="url(#seedlingShadow)" />
    <path d="M24 22 C 27 19, 30 16, 32 12" stroke="#0d5302" strokeWidth="0.8" />
  </svg>
);

interface Reason {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const WhyChooseUs: React.FC = () => {
  const reasons: Reason[] = [
    {
      icon: <OrganicIcon />,
      title: "100% Natural & Pure",
      subtitle: "ZERO CHEMICAL COMPOUNDS",
      description: "Completely free from artificial colors, harmful chemicals, or preservatives.",
      badge: "PURE ORGANIC"
    },
    {
      icon: <ProcessIcon />,
      title: "Home-Like Hygiene",
      subtitle: "PRISTINE TRADITIONAL CARE",
      description: "Processed in facilities while strictly maintaining traditional cleanliness standards.",
      badge: "PURE PROCESS"
    },
    {
      icon: <MedalIcon />,
      title: "Uncompromising Quality",
      subtitle: "PREMIUM QUALITY",
      description: "We source only the finest raw materials to ensure authentic taste and maximum health benefits.",
      badge: "UNBLENDED"
    },
    {
      icon: <SeedlingIcon />,
      title: "100% Premium Raw Materials",
      subtitle: "FINEST SOURCED CROPS",
      description: "We strictly avoid cheap blends, sourcing only first-quality raw materials.",
      badge: "PREMIUM CROP"
    }
  ];

  return (
    <section id="why-choose-us" className="why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="why-section-header">
          <div className="why-section-badge">
            <span className="why-badge-dot"></span>
            Why Us
            <span className="why-badge-dot"></span>
          </div>
          <h2 className="why-title">The Pillars of Unmatched Purity</h2>
          <div className="why-divider"></div>
        </div>

        {/* 4 Scroll Cards using scroll_vertical.png */}
        <div className="why-us-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="scroll-card">
              <div className="scroll-img-wrap">
                <Image
                  src="/images/scroll_vertical.png"
                  alt="ancient scroll"
                  fill
                  style={{ objectFit: 'fill', objectPosition: 'center' }}
                  priority={index < 2}
                />
              </div>

              {/* Content overlaid on the parchment paper zone */}
              <div className="scroll-content">
                <div className="reason-title-group">
                  <h3 className="reason-title">{reason.title}</h3>
                  <span className="reason-subtitle">{reason.subtitle}</span>
                </div>

                <div className="scroll-inner-divider"></div>

                <p className="reason-desc">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FSSAI Certification Badge */}
        <div className="fssai-cert-container">
          <div className="fssai-cert-card glass-panel">
            <div className="fssai-image-wrapper">
              <Image
                src="/images/fssai_cert.png"
                alt="FSSAI Certified"
                width={96}
                height={72}
                className="fssai-logo-img"
              />
            </div>
            <div className="fssai-details">
              <h4>FSSAI Certified Safety Standards</h4>
              <p>
                Taste Mithra strictly follows the food safety regulations set by the Food Safety and Standards Authority of India (FSSAI).
              </p>
              <span className="fssai-lic-no">Lic. No. 20251101107893725</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ===== SECTION ===== */
        .why-us-section {
          padding: 120px 0 180px;
          background-color: #ffffff !important;
          background: #ffffff !important;
          position: relative;
          overflow: hidden;
        }

        /* ===== HEADER ===== */
        .why-section-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .why-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #000000 !important;
          background: transparent;
          border: none;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          margin-bottom: 24px;
        }
        .why-badge-dot {
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
        .why-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          color: #0E8B5A !important;
          -webkit-text-fill-color: #0E8B5A !important;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .why-divider {
          width: 80px;
          height: 3px;
          background-color: var(--primary);
          margin: 0 auto;
        }

        /* ===== GRID ===== */
        /* ===== GRID ===== */
        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ===== CARD WRAPPER ===== */
        .scroll-card {
          position: relative !important;
          width: 100% !important;
          max-width: 480px !important;
          margin: 0 auto !important;
          aspect-ratio: 1 / 0.95 !important;
          background: transparent !important;
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15),
                      filter 0.4s ease !important;
          filter: drop-shadow(0 14px 28px rgba(0,0,0,0.18)) !important;
          cursor: default !important;
          padding: 0 !important;
        }
        .scroll-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          filter: drop-shadow(0 22px 38px rgba(0,0,0,0.26)) !important;
          border-color: transparent !important;
          box-shadow: none !important;
        }

        /* Image fills the card */
        .scroll-img-wrap {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* ===== CONTENT ===== */
        .scroll-content {
          position: absolute;
          top: 14%;
          bottom: 14%;
          left: 18%;
          right: 18%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 10;
          padding: 0;
        }

        .scroll-card .card-badge {
          background: rgba(92, 64, 30, 0.06) !important;
          background-color: rgba(92, 64, 30, 0.06) !important;
          border: 1px solid rgba(92, 64, 30, 0.25) !important;
          color: #54391e !important;
          font-family: var(--font-body);
          font-size: 0.55rem !important;
          font-weight: 700 !important;
          padding: 2px 8px !important;
          border-radius: 12px !important;
          text-transform: uppercase !important;
          letter-spacing: 0.06em !important;
          white-space: nowrap;
        }

        .scroll-inner-divider {
          width: 60px;
          height: 1px;
          background: rgba(92, 64, 30, 0.25);
          margin: 10px 0 8px;
        }

        .reason-title-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .reason-title {
          font-family: var(--font-heading) !important;
          font-size: 1.5rem !important;
          font-weight: 800 !important;
          color: #381c00 !important;
          -webkit-text-fill-color: #381c00 !important;
          line-height: 1.2 !important;
          margin: 0 !important;
        }

        .reason-subtitle {
          font-family: var(--font-body) !important;
          font-size: 0.85rem !important;
          font-weight: 700 !important;
          color: #915c1e !important;
          -webkit-text-fill-color: #915c1e !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          margin: 0 !important;
          margin-top: 4px !important;
        }

        .reason-desc {
          font-family: var(--font-body) !important;
          font-size: 1.12rem !important;
          line-height: 1.45 !important;
          color: #593c20 !important;
          margin: 0 !important;
          max-width: 100%;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .why-us-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .scroll-card {
            max-width: 420px !important;
          }
        }
        @media (max-width: 600px) {
          .why-us-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .scroll-card {
            max-width: 450px !important;
            width: 100% !important;
            aspect-ratio: 1 / 0.95 !important;
          }
          .scroll-content {
            top: 14%;
            bottom: 14%;
            left: 18%;
            right: 18%;
          }
          .reason-title {
            font-size: 1.2rem !important;
          }
          .reason-subtitle {
            font-size: 0.72rem !important;
          }
          .reason-desc {
            font-size: 0.9rem !important;
            line-height: 1.35 !important;
          }
          .scroll-inner-divider {
            margin: 8px 0 6px;
            width: 45px;
          }
        }

        /* ===== FSSAI CERTIFICATION ===== */
        .fssai-cert-container {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .fssai-cert-card {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px 32px !important;
          max-width: 680px;
          width: 100%;
          border: 2.5px solid var(--primary) !important;
          border-radius: var(--radius-lg) !important;
          background-color: #ffffff !important;
          box-shadow: 0 8px 0px rgba(14, 139, 90, 0.12) !important;
        }

        .fssai-image-wrapper {
          width: 104px;
          height: 78px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #ffffff;
          padding: 6px 10px;
          border: 1.5px solid rgba(var(--primary-raw), 0.15);
        }

        .fssai-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .fssai-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .fssai-details h4 {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: #0E8B5A !important;
          margin-bottom: 6px;
          -webkit-text-fill-color: #0E8B5A !important;
          background: none !important;
        }

        .fssai-details p {
          font-family: var(--font-body);
          font-size: 0.95rem !important;
          line-height: 1.5;
          color: #222222 !important;
          margin-bottom: 8px !important;
        }

        .fssai-lic-no {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 800;
          color: #7A4F22 !important;
          background: rgba(122, 79, 34, 0.08);
          border: 1px solid rgba(122, 79, 34, 0.2);
          padding: 4px 12px;
          border-radius: 100px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        @media (max-width: 600px) {
          .fssai-cert-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 16px;
            padding: 24px 20px !important;
          }

          .fssai-details {
            align-items: center;
            text-align: center;
          }

          .fssai-details h4 {
            font-size: 1.12rem;
          }

          .fssai-details p {
            font-size: 0.88rem !important;
          }
        }
      `}</style>
    </section>
  );
};
