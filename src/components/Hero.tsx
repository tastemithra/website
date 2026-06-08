"use client";

import React from 'react';

import Link from 'next/link';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Purity You Can Taste,<br />
            Trust You Can Feel
          </h1>

          <p className="hero-description">
            Pure kitchen essentials since 2021. We guarantee
            <strong> 100% pure coconut oil</strong>, <strong>authentic masalas</strong>,
            and <strong>premium flours</strong>—crafted with pristine hygiene under our core belief:
            <span className="highlight-philosophy"> &quot;We only sell what we eat.&quot;</span>
          </p>

          <div className="hero-actions">
            <Link href="/products" className="pill-nav-btn btn-wa-green">
              Our Finest Collection
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <a
              href="https://wa.me/919895957886?text=Hi%20Taste%20Mithra%2C%20I'm%20interested%20in%20your%20pure%20kitchen%20products%21"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-nav-btn btn-wa-green"
            >
              <WhatsAppIcon size={20} />
              Let&apos;s Chat
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 140px 0 80px 0;
          overflow: hidden;
          background: var(--bg-elevated);
        }

        .hero-visual-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 5;
        }

        .hero-image-card {
          position: relative;
          width: 100%;
          max-width: 500px;
          border-radius: var(--radius-lg);
          border: 3.5px solid var(--primary);
          background: #ffffff;
          overflow: hidden;
          box-shadow: 0 16px 0px rgba(14, 139, 90, 0.15);
          transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .hero-image-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 0px rgba(14, 139, 90, 0.22);
          border-color: var(--primary-soft);
        }

        .hero-main-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .hero-image-card:hover .hero-main-img {
          transform: scale(1.05);
        }

        .hero-stamp-badge {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: #FF7A00;
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 8px 16px;
          border-radius: 999px;
          border: 2.2px solid #222222;
          box-shadow: 0 3px 0 #222222;
          letter-spacing: 0.06em;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 60px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          margin-top: -150px;
        }


        .hero-title {
          max-width: 25ch;
          margin-bottom: 24px;
          color: var(--primary-deep) !important;
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 850;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .hero-description {
          max-width: 62ch;
          margin-bottom: 40px;
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.8;
        }

        .highlight-philosophy {
          display: block;
          margin-top: 12px;
          padding-left: 12px;
          border-left: 3px solid var(--primary);
          color: var(--text-light);
          font-style: italic;
          font-weight: 700;
        }

        .hero-actions {
          grid-column: 1 / -1;
          display: flex;
          flex-wrap: nowrap !important;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;
          margin-top: -10px;
          margin-bottom: 20px;
          padding-right: 80px;
          width: 100%;
          z-index: 10;
        }

        .hero-actions .pill-nav-btn {
          font-size: 1.05rem !important;
          padding: 14px 28px !important;
          white-space: nowrap !important;
        }

        .hero-trust-metrics {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-self: start;
          justify-self: end;
          margin-top: 20px;
          width: 280px;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 18px 20px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(76, 66, 18, 0.08);
          box-shadow: 0 12px 28px rgba(64, 54, 12, 0.05);
        }

        .metric-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }

        .metric-label {
          color: var(--text-subtle);
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.45;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 460px;
        }

        .showcase-glass-card {
          position: relative;
          padding: 26px;
          overflow: hidden;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 247, 0.92);
          border: 1px solid rgba(var(--primary-raw), 0.18);
          box-shadow: var(--shadow-deep);
          transition: all 0.3s ease;
        }

        .showcase-glass-card:hover {
          border-color: rgba(var(--primary-raw), 0.36);
          box-shadow: var(--shadow-neon);
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: rgba(255, 255, 255, 0.22);
          transform: skewX(-20deg);
          animation: shineFlow 8s infinite linear;
        }

        @keyframes shineFlow {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }

        .showcase-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          border-radius: var(--radius-md);
        }

        .glass-indicator {
          position: absolute;
          right: 40px;
          bottom: 40px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 100px;
          background: var(--primary);
          border: 1px solid rgba(var(--primary-raw), 0.42);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 18px 36px rgba(var(--primary-raw), 0.22);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-olive);
          box-shadow: 0 0 10px rgba(60, 53, 18, 0.2);
        }

        .decorative-badge {
          position: absolute;
          z-index: 3;
          padding: 14px 22px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(76, 66, 18, 0.08);
          box-shadow: 0 14px 30px rgba(64, 54, 12, 0.06);
          color: var(--text-light);
          font-family: var(--font-body);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .badge-1 {
          top: -20px;
          left: -40px;
          border-left: 3px solid var(--accent-red);
        }

        .badge-2 {
          bottom: -10px;
          left: -30px;
          border-left: 3px solid var(--primary);
        }

        @media (max-width: 1050px) {
          .hero-title {
            font-size: 3.4rem;
          }
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-content {
            align-items: center;
          }

          .hero-description {
            max-width: 100%;
            font-size: 0.92rem;
            line-height: 1.65;
          }

          .highlight-philosophy {
            display: block;
            text-align: center;
            padding: 10px 0;
            margin-top: 15px;
            border-left: none;
            border-top: 1px solid rgba(var(--primary-raw), 0.2);
            border-bottom: 1px solid rgba(var(--primary-raw), 0.2);
          }

          .hero-actions {
            justify-content: center;
            width: 100%;
            padding-right: 0 !important;
          }

          .hero-trust-metrics {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            width: 100% !important;
            gap: 16px !important;
            margin-top: 30px !important;
            justify-self: center !important;
            align-self: center !important;
          }

          .hero-spacer {
            display: none !important;
          }
        }

        @media (max-width: 600px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-actions {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
            width: 100%;
            padding-right: 0 !important;
            justify-content: center;
          }

          .hero-actions .pill-nav-btn {
            flex: 1 1 auto;
            min-width: 0;
            font-size: 0.78rem !important;
            padding: 10px 14px !important;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
          }

          .hero-trust-metrics {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }

        @media (max-width: 350px) {
          .hero-section {
            padding: 110px 0 40px 0 !important;
          }
          .hero-title {
            font-size: 1.55rem !important;
            line-height: 1.25 !important;
            margin-bottom: 16px !important;
          }
          .hero-description {
            font-size: 0.85rem !important;
            margin-bottom: 24px !important;
            line-height: 1.5 !important;
          }
          .hero-actions {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
          }
          .hero-actions .pill-nav-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
};
