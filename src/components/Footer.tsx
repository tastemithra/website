"use client";

import React from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

const MapPinIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="brand-animate-container footer-brand-animate">
                <div className="logo-glow-halo">
                  <Logo width={55} height={55} />
                </div>
                <div className="footer-brand-text">
                  <span className="footer-brand-title">Taste Mithra</span>
                  <span className="footer-brand-subtitle">Friend that can&apos;t spare</span>
                </div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Pure ingredients. Authentic taste. We only sell what we eat.
            </p>
            <div className="footer-social-links">
              <a
                href="https://www.instagram.com/taste_mithra?utm_source=qr&igsh=MXNod2R1ajk1azgzaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>



          {/* Contact Details Column */}
          <div className="footer-contact-col">
            <h5 className="footer-col-title">Get in Touch</h5>
            <ul className="footer-contact-list">
              <li>
                <span className="icon"><MapPinIcon /></span>
                <a
                  href="https://maps.app.goo.gl/Rp9Q99pcp2Gs1geu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text hover-neon"
                >
                  Manniyamperumbalam, Kudallur post, Pin : 679554, Palakkad district, Kerala
                </a>
              </li>
              <li>
                <span className="icon"><PhoneIcon /></span>
                <a href="tel:+919895957886" className="text hover-neon">+91 9895957886</a>
              </li>
              <li>
                <span className="icon"><WhatsAppIcon size={18} /></span>
                <a
                  href="https://wa.me/919895957886?text=Hi%20Taste%20Mithra%21%20I%20have%20an%20enquiry%20regarding%20purity."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text hover-neon"
                >
                  WhatsApp Live Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Taste Mithra. All rights reserved.
          </p>
          <p className="design-credits">
            Developed by <a href="https://www.rubicstudio.app/" target="_blank" rel="noopener noreferrer">Rubic Studio</a>
          </p>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: var(--bg-panel-dark);
          border-top: 1px solid rgba(var(--primary-raw), 0.18);
          padding: 80px 0 30px 0;
          position: relative;
          z-index: 10;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 60px;
          margin-bottom: 50px;
        }

        /* Brand Column */
        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Matches navbar brand-animate-container hover effect */
        .footer-brand-animate {
          cursor: default;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .footer-brand-animate:hover {
          transform: scale(1.04);
        }

        /* Matches navbar logo-glow-halo */
        .footer-brand-animate .logo-glow-halo {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-brand-animate .logo-glow-halo::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 223, 0, 0.25) 0%, transparent 70%);
          animation: logoHaloPulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes logoHaloPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.12); }
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.08em;
        }

        .footer-brand-subtitle {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          color: #FFDF00 !important;
          letter-spacing: 0.18em;
        }

        .footer-brand-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.6;
          color: #B2BFB7;
          max-width: 380px;
        }

        /* Social Links */
        .footer-social-links {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(var(--primary-raw), 0.2);
          color: #FFDF00 !important;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-icon-btn svg {
          stroke: #FFDF00 !important;
          width: 18px;
          height: 18px;
          transition: all 0.3s ease;
        }

        .social-icon-btn:hover {
          background: var(--primary) !important;
          color: #ffffff !important;
          border-color: var(--primary) !important;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 0 15px rgba(var(--primary-raw), 0.45);
        }

        .social-icon-btn:hover svg {
          stroke: #ffffff !important;
        }

        /* Links Columns */
        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 24px;
          position: relative;
          width: fit-content;
        }

        .footer-col-title::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 24px;
          height: 2px;
          background-color: var(--primary);
          box-shadow: 0 0 8px rgba(var(--primary-raw), 0.45);
        }



        /* Contact Column */
        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-contact-list .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFDF00 !important;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .footer-contact-list .icon svg {
          stroke: #FFDF00 !important;
          width: 18px;
          height: 18px;
        }

        .footer-contact-list .icon svg.custom-wa-icon,
        .footer-contact-list .icon svg.custom-wa-icon path {
          stroke: none !important;
          fill: #FFDF00 !important;
        }

        .footer-section .footer-contact-col .footer-contact-list li span.text,
        .footer-section .footer-contact-col .footer-contact-list li a.text,
        .footer-section .footer-contact-col .footer-contact-list li a.text.hover-neon,
        .footer-section .footer-contact-col .footer-contact-list li a {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }

        .footer-section .footer-contact-col .footer-contact-list li a.text.hover-neon {
          transition: all 0.3s ease;
        }

        .footer-section .footer-contact-col .footer-contact-list li a.text.hover-neon:hover {
          color: #FFDF00 !important;
          -webkit-text-fill-color: #FFDF00 !important;
          text-shadow: 0 0 5px rgba(247, 198, 0, 0.3) !important;
        }

        /* Footer Bottom */
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          text-align: center;
        }

        .copyright-text {
          font-family: var(--font-body);
          font-size: 0.82rem;
          color: #8C9991;
        }

        .footer-section .footer-bottom .design-credits {
          font-family: var(--font-body);
          font-size: 0.82rem;
          color: #FFF9E8 !important;
        }

        .footer-section .footer-bottom .design-credits a {
          color: #FFDF00 !important;
          -webkit-text-fill-color: #FFDF00 !important;
          font-weight: 700 !important;
          transition: all 0.3s ease;
        }

        .footer-section .footer-bottom .design-credits a:hover {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5) !important;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-brand-col {
            align-items: flex-start;
            text-align: left;
          }

          .footer-social-links {
            justify-content: flex-start;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
