"use client";

import React, { useRef, useEffect } from 'react';

export const Anniversary: React.FC = () => {
  const milestones = [
    {
      year: "May 15, 2021",
      title: "The Humble Seed",
      description: "Taste Mithra was founded with a singular, powerful mission: to replace chemically-treated food products with 100% pure, healthy ingredients, ensuring absolute safety for families."
    },
    {
      year: "2022 - 2023",
      title: "Becoming a Kitchen Companion",
      description: "Our premium coconut oil, extracted from carefully selected unsulphured copra, gains widespread acclaim. We become a household name trusted for purity and traditional care."
    },
    {
      year: "2024 - 2025",
      title: "State-of-the-Art Purity",
      description: "We expanded our product lines to authentic, aromatic masala powders and premium grain flours, processing them in state-of-the-art facilities while strictly maintaining traditional hygiene."
    },
    {
      year: "May 15, 2026",
      title: "Half a Decade of Purity",
      description: "Proudly celebrating A Legacy of Trust, Purity & Taste! We stand stronger than ever as a reliable companion for your family's health, sticking to our promise: 'We only sell what we eat'."
    }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !fillRef.current) return;

      const timeline = timelineRef.current;
      const fill = fillRef.current;
      const rect = timeline.getBoundingClientRect();
      const startTrigger = window.innerHeight * 0.6;

      let progress = ((startTrigger - rect.top) / rect.height) * 100;
      progress = Math.max(0, Math.min(progress, 100));

      fill.style.height = `${progress}%`;

      itemsRef.current.forEach((item) => {
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top + 30 < startTrigger) {
          item.classList.add('dot-active');
        } else {
          item.classList.remove('dot-active');
        }
      });
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <section id="about" className="anniversary-section">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-dot"></span>
            Our Journey
            <span className="section-badge-dot"></span>
          </div>
          <h2 className="section-title">A Legacy of Trust, Purity & Taste!</h2>
          <div className="header-divider"></div>
        </div>

        {/* 5-Year Featured Showcase Card */}
        <div className="anniversary-showcase-card glass-panel">
          <div className="anniversary-badge-container">
            <div className="badge-glow-ring"></div>
            <div className="badge-text" style={{ fontSize: '1rem', fontWeight: 800, marginTop: '8px' }}>SINCE</div>
            <div className="badge-number" style={{ fontSize: '2.8rem', lineHeight: '1.1' }}>2021</div>
          </div>
          <div className="showcase-content">
            <h3>Celebrating a Milestone of Health & Purity</h3>
            <p>
              Founded on <strong>May 15, 2021</strong>, Taste Mithra began its journey with a simple yet
              powerful mission: to bring the purest, healthiest, and highest-quality food products
              to every kitchen. Today, as we proudly celebrate 5+ years of serving our community,
              Taste Mithra has become a household name trusted by families across the region.
            </p>
            <p className="philosophy-quote">
              &quot;For us, health and trust come before everything else. We strictly adhere to our core philosophy of absolute purity. True to our tagline &apos;Friend that can&apos;t spare&apos;, we stand by you as a reliable companion for your family&apos;s health.&quot;
            </p>
          </div>
        </div>

        {/* Interactive Timeline Grid */}
        <div className="timeline-container" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-fill" ref={fillRef}></div>
          </div>

          <div className="timeline-grid">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="timeline-item"
                ref={(el) => { itemsRef.current[index] = el; }}
              >
                <div className="timeline-dot-wrapper">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-card glass-panel">
                  <span className="milestone-year">{item.year}</span>
                  <h4 className="milestone-title">{item.title}</h4>
                  <p className="milestone-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .anniversary-section {
          padding: 100px 0;
          background: var(--bg-elevated);
          position: relative;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-badge {
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

        .section-badge-dot {
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

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--text-light);
          margin-top: 10px;
          margin-bottom: 20px;
        }

        .header-divider {
          width: 80px;
          height: 3px;
          background-color: var(--primary);
          margin: 0 auto;
          box-shadow: 0 0 10px var(--primary);
        }

        /* 5-Year Showcase Card */
        .anniversary-showcase-card {
          display: grid;
          grid-template-columns: 0.35fr 0.65fr;
          gap: 40px;
          padding: 48px;
          border-radius: var(--radius-lg);
          align-items: center;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
        }

        .anniversary-badge-container {
          position: relative;
          width: 180px;
          height: 180px;
          background: rgba(var(--primary-raw), 0.08);
          border: 2px solid var(--primary);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 0 30px rgba(var(--primary-raw), 0.2);
        }

        .badge-glow-ring {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border: 1px dashed rgba(var(--primary-raw), 0.4);
          border-radius: 50%;
          animation: spinSlow 20s linear infinite;
        }

        .badge-number {
          font-family: var(--font-heading);
          font-size: 5.5rem;
          font-weight: 900;
          color: var(--text-light);
          line-height: 1;
          text-shadow: 0 0 20px rgba(var(--primary-raw), 0.3);
        }

        .badge-text {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--primary);
          text-align: center;
          letter-spacing: 1.5px;
          line-height: 1.3;
          margin-top: 4px;
        }

        .showcase-content h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 18px;
        }

        .showcase-content p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .philosophy-quote {
          border-left: 3px solid var(--primary);
          padding-left: 16px;
          font-style: italic;
          color: var(--text-light) !important;
          margin-bottom: 0 !important;
          font-size: 1rem !important;
          background: rgba(var(--primary-raw), 0.05);
          padding-top: 10px;
          padding-bottom: 10px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        /* Timeline Section */
        .timeline-container {
          position: relative;
          padding-top: 20px;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: rgba(var(--primary-raw), 0.15);
          z-index: 1;
        }

        .timeline-line-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: var(--primary);
          box-shadow: 0 0 8px var(--primary);
          transition: height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .timeline-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr;
          position: relative;
        }

        /* Alternating layout on desktop using margin/padding hacks in flex/grid */
        .timeline-item:nth-child(odd) {
          padding-right: 50%;
        }

        .timeline-item:nth-child(even) {
          padding-left: 50%;
        }

        .timeline-dot-wrapper {
          position: absolute;
          left: 50%;
          top: 30px;
          transform: translateX(-50%);
          z-index: 3;
        }

        .timeline-dot {
          width: 16px;
          height: 16px;
          background-color: var(--bg-dark);
          border: 3px solid var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-dot,
        .timeline-item.dot-active .timeline-dot {
          background-color: var(--primary);
          transform: scale(1.3);
          box-shadow: 0 0 15px var(--primary), 0 0 5px var(--primary);
        }

        .timeline-card {
          padding: 30px;
          border-radius: var(--radius-md);
          margin: 0 40px;
          position: relative;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 28px;
          width: 0;
          height: 0;
          border-style: solid;
        }

        .timeline-item:nth-child(odd) .timeline-card::before {
          right: -10px;
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent rgba(255, 255, 255, 0.7);
        }

        .timeline-item:nth-child(even) .timeline-card::before {
          left: -10px;
          border-width: 10px 10px 10px 0;
          border-color: transparent rgba(255, 255, 255, 0.7) transparent transparent;
        }

        .milestone-year {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--primary);
          background: rgba(var(--primary-raw), 0.12);
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 12px;
          border: 1px solid rgba(var(--primary-raw), 0.2);
        }

        .milestone-title {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 10px;
        }

        .milestone-desc {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .anniversary-showcase-card {
            grid-template-columns: 1fr;
            padding: 30px;
            text-align: center;
          }

          .anniversary-badge-container {
            margin-bottom: 20px;
          }

          .philosophy-quote {
            border-left: none;
            border-top: 2px solid var(--primary);
            padding: 15px 0 0 0;
          }

          /* Collapse timeline into a single-side layout on mobile */
          .timeline-line {
            left: 20px;
          }

          .timeline-item {
            padding-left: 40px !important;
            padding-right: 0 !important;
          }

          .timeline-dot-wrapper {
            left: 20px;
          }

          .timeline-card {
            margin-left: 20px;
            margin-right: 0;
          }

          .timeline-card::before {
            left: -10px !important;
            border-width: 10px 10px 10px 0 !important;
            border-color: transparent rgba(255, 255, 255, 0.7) transparent transparent !important;
          }
        }

        @media (max-width: 600px) {
          .anniversary-showcase-card {
            padding: 20px 16px;
          }
          .timeline-card {
            padding: 20px 16px;
            margin-left: 10px;
          }
          .timeline-item {
            padding-left: 30px !important;
          }
          .timeline-line {
            left: 10px;
          }
          .timeline-dot-wrapper {
            left: 10px;
          }
        }
      `}</style>
    </section>
  );
};
