"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Use IntersectionObserver for highly efficient active section tracking with zero scroll lag
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // detects when section dominates viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const path = window.location.pathname;
    let observer: IntersectionObserver | null = null;
    let timer: NodeJS.Timeout | null = null;

    if (path.includes('/about')) {
      timer = setTimeout(() => setActiveSection("about"), 0);
    } else if (path.includes('/products')) {
      timer = setTimeout(() => setActiveSection("products"), 0);
    } else {
      observer = new IntersectionObserver(observerCallback, observerOptions);
      const sections = ["home"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer?.observe(el);
      });
    }

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled state - only set state if value changed
      const nextScrolled = currentScrollY > 20;
      if (scrolled !== nextScrolled) {
        setScrolled(nextScrolled);
      }

      // Hide/Show navbar based on scroll direction - only set state if value changed
      const nextVisible = !(currentScrollY > lastScrollY && currentScrollY > 120 && !mobileMenuOpen);
      if (visible !== nextVisible) {
        setVisible(nextVisible);
      }
      lastScrollY = currentScrollY;

      // Scroll Progress Indicator - directly modify DOM node to prevent component re-render loops
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && progressBarRef.current) {
        const progress = (currentScrollY / totalHeight) * 100;
        progressBarRef.current.style.width = `${progress}%`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load to catch current route/position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [mobileMenuOpen, scrolled, visible]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${!visible ? 'navbar-hidden' : ''}`}>
        <div className="navbar-container">

          {/* Desktop Left Links */}
          <div className="navbar-links left-links">
            <Link href="/#home" className={`pill-nav-btn ${activeSection === 'home' ? 'active-pill' : ''}`}>Home</Link>
            <Link href="/about" className={`pill-nav-btn ${activeSection === 'about' ? 'active-pill' : ''}`}>About Us</Link>
            <Link href="/products" className={`pill-nav-btn ${activeSection === 'products' ? 'active-pill' : ''}`}>Products</Link>
          </div>

          {/* Logo Brand Section (Centered) */}
          <Link href="/#home" className="navbar-brand centered-brand">
            <div className="brand-animate-container">
              <div className="logo-glow-halo">
                <Logo width={55} height={55} />
              </div>
              <div className="navbar-brand-text">
                <span className="brand-title">Taste Mithra</span>
                <span className="brand-subtitle">Friend that can&apos;t spare</span>
              </div>
            </div>
          </Link>

          {/* Desktop Right Links */}
          <div className="navbar-links right-links">
            <a href="tel:+919895957886" className={`pill-nav-btn ${activeSection === 'contact' ? 'active-pill' : ''}`}>Contact</a>
            <Link href="/#contact" className="pill-nav-btn buy-btn">
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'toggle-active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Horizontal Dotted Divider underneath Navbar */}
        <div className="navbar-dotted-divider"></div>
      </nav>

      {/* Interactive Scroll Progress Indicator - Placed outside of nav so it remains fixed at top of screen even when nav hides */}
      <div ref={progressBarRef} className="scroll-progress-bar"></div>

      {/* Mobile Menu Overlay Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-links">
          <Link href="/#home" onClick={() => setMobileMenuOpen(false)} className="drawer-link">Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="drawer-link">About Us</Link>
          <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="drawer-link">Products</Link>
          <a href="tel:+919895957886" onClick={() => setMobileMenuOpen(false)} className="drawer-link">Contact</a>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="pill-nav-btn buy-btn" style={{ fontSize: '1.2rem', padding: '12px 30px' }}>Order Now</Link>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 14px 0 0 0;
          transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, background 0.4s ease;
          background: var(--primary);
          will-change: transform;
        }

        .navbar-hidden {
          transform: translateY(-100%);
        }

        .navbar-scrolled {
          padding: 8px 0 0 0;
          background: rgba(14, 139, 90, 0.98);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .centered-brand {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brand-animate-container {
          display: flex;
          align-items: center;
          gap: 12px;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .brand-animate-container:hover {
          transform: scale(1.04);
        }

        .logo-glow-halo {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }



        .navbar-brand-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }

        .brand-subtitle {
          font-family: var(--font-body, sans-serif);
          font-size: 0.72rem;
          font-weight: 700;
          font-style: normal;
          color: #FFDF00;
          letter-spacing: 0.18em;
          line-height: 1.3;
          margin-top: 1px;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .left-links {
          flex: 1;
          display: flex;
          justify-content: flex-start;
        }

        .right-links {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }


        /* Horizontal Dotted Divider below navbar links */
        .navbar-dotted-divider {
          width: 100%;
          height: 0px;
          border-bottom: 2.5px dotted #FFDF00; /* Warm Yellow Dotted line */
          margin-top: 14px;
          opacity: 0.85;
        }

        /* Interactive Scroll Progress Indicator bar */
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: #FF7A00; /* Accent orange matching theme */
          width: 0%;
          transition: width 0.08s ease-out;
          z-index: 1005; /* Stays above the translated hidden navbar (z-index: 1000) */
        }

        /* Mobile Hamburger styles */
        .mobile-toggle-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.2);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          cursor: pointer;
          z-index: 1100;
          transition: all 0.3s ease;
        }

        .mobile-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .hamburger-line {
          width: 18px;
          height: 2px;
          background-color: #ffffff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toggle-active .hamburger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .toggle-active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .toggle-active .hamburger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(14, 139, 90, 0.98);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .drawer-open {
          right: 0;
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
          width: 100%;
          padding: 20px;
        }

        .drawer-link {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff !important;
          letter-spacing: 0.04em;
        }

        .drawer-link:hover {
          color: #FFDF00 !important;
        }

        @media (min-width: 901px) and (max-width: 1220px) {
          .navbar-container {
            padding: 0 16px;
          }
          .pill-nav-btn {
            font-size: 0.71rem !important;
            padding: 6px 12px !important;
          }
          .navbar-links {
            gap: 8px;
          }
          .centered-brand {
            gap: 8px;
          }
          .logo-glow-wrapper {
            width: 45px !important;
            height: 45px !important;
            flex-shrink: 0 !important;
          }
          .brand-animate-container .logo-container {
            width: 50px !important;
            height: 50px !important;
          }
          .brand-title {
            font-size: 0.95rem;
          }
          .brand-subtitle {
            font-size: 0.62rem;
          }
        }

        @media (max-width: 900px) {
          .left-links, .right-links {
            display: none !important;
          }
          .centered-brand {
            position: relative;
            left: 0;
            transform: none;
            margin-right: auto;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .navbar-dotted-divider {
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  );
};
