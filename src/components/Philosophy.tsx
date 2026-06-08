"use client";

import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="philosophy-section">
      {/* Dynamic ambient highlight spot */}
      <div className="spotlight"></div>

      <div className="container">
        <div className="philosophy-wrapper">
          {/* Sincerity Quote Board */}
          <div className="quote-board glass-panel">
            <div className="quote-icon-top">“</div>
            
            <span className="quote-subtitle text-gradient-neon">Our Sincere Promise</span>
            
            <h2 className="quote-headline">
              &quot;We Only Sell What We <span className="highlight-text">Eat</span>&quot;
            </h2>
            
            <p className="quote-body">
              {"At Taste Mithra, we believe your family's health is sacred. This is why we strictly"} 
              {"adhere to a simple standard: we will never package, sell, or source any food ingredient"} 
              {"that we wouldn't proudly serve to our own children at our own dining table."} 
            </p>

            <p className="quote-subbody">
              From our premium cold-pressed coconut oil to our slow-roasted aromatic masalas and 
              superfine flours, every grain is triple-cleaned and processed under absolute hygiene 
              conditions. Because true health begins with uncompromising purity.
            </p>

            <div className="signature-section">
              <div className="signature-line"></div>
              <span className="signature-name">Taste Mithra Family</span>
              <span className="signature-title">Pledge of Absolute Purity</span>
            </div>

            <div className="quote-icon-bottom">”</div>
          </div>


        </div>
      </div>

      <style>{`
        .philosophy-section {
          padding: 100px 0;
          background: var(--bg-elevated);
          position: relative;
          overflow: hidden;
        }

        .spotlight {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 350px;
          background: rgba(var(--primary-raw), 0.1);
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 1;
        }

        .philosophy-wrapper {
          position: relative;
          z-index: 2;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* Quote Board */
        .quote-board {
          position: relative;
          padding: 60px 80px;
          border-radius: var(--radius-lg);
          border-color: rgba(var(--primary-raw), 0.26) !important;
          box-shadow: var(--shadow-neon);
          text-align: center;
          background: var(--bg-card-strong) !important;
        }

        .quote-icon-top {
          position: absolute;
          top: -20px;
          left: 40px;
          font-size: 8rem;
          font-family: Georgia, serif;
          color: rgba(var(--primary-raw), 0.12);
          line-height: 1;
        }

        .quote-icon-bottom {
          position: absolute;
          bottom: -90px;
          right: 40px;
          font-size: 8rem;
          font-family: Georgia, serif;
          color: rgba(var(--primary-raw), 0.12);
          line-height: 1;
        }

        .quote-subtitle {
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
          display: block;
        }

        .quote-headline {
          font-family: var(--font-heading);
          font-size: 3.2rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 24px;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .highlight-text {
          color: var(--primary);
          text-shadow: 0 0 15px rgba(var(--primary-raw), 0.2);
        }

        .quote-body {
          font-family: var(--font-body);
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--text-light);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .quote-subbody {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .signature-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .signature-line {
          width: 60px;
          height: 1px;
          background-color: var(--primary);
          margin-bottom: 12px;
        }

        .signature-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: 0.5px;
        }

        .signature-title {
          font-family: var(--font-body);
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2px;
        }



        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .quote-board {
            padding: 40px 30px;
          }

          .quote-headline {
            font-size: 2.3rem;
          }

          .quote-body {
            font-size: 1.1rem;
          }



          .quote-icon-top, .quote-icon-bottom {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
