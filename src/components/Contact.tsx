"use client";

import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

const MapPinIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message with form details
    const text = `Hi Taste Mithra! I would like to make an enquiry:
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Product of Interest:* ${formData.product}
*Message:* ${formData.message}`;

    const waUrl = `https://wa.me/919895957886?text=${encodeURIComponent(text)}`;

    // Open in new window
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Background spotlights */}
      <div className="ambient-spot glow-3"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="contact-section-badge">
            <span className="contact-badge-dot"></span>
            Get In Touch
            <span className="contact-badge-dot"></span>
          </div>
          <h2 className="section-title">Join Our Family of Trust</h2>
          <div className="header-divider"></div>
        </div>

        <div className="contact-grid">
          {/* Left Column: Location & Info */}
          <div className="contact-info-col">
            <h3 className="info-title">Let&apos;s Connect</h3>
            <p className="info-desc">
              Have questions about our purity processes or want to place bulk orders? Reach out
              to us directly. We stand by you as a reliable companion for your family&apos;s health.
            </p>

            <div className="info-card info-card-combined">
              {/* Location Item */}
              <a
                href="https://maps.app.goo.gl/Rp9Q99pcp2Gs1geu5"
                target="_blank"
                rel="noopener noreferrer"
                className="info-item-row interactive"
              >
                <div className="info-icon">
                  <MapPinIcon />
                </div>
                <div className="info-text">
                  <h5>Our Location</h5>
                  <p>Manniyamperumbalam, Kudallur post, Pin : 679554, Palakkad district, Kerala</p>
                </div>
                <span className="hover-arrow">
                  <ArrowRightIcon />
                </span>
              </a>

              <div className="info-item-divider"></div>

              {/* Phone Item */}
              <a href="tel:+919895957886" className="info-item-row interactive">
                <div className="info-icon">
                  <PhoneIcon />
                </div>
                <div className="info-text">
                  <h5>Call Us Directly</h5>
                  <p>+91 9895957886</p>
                </div>
                <span className="hover-arrow">
                  <ArrowRightIcon />
                </span>
              </a>

              <div className="info-item-divider"></div>

              {/* WhatsApp Item */}
              <a
                href="https://wa.me/919895957886?text=Hi%20Taste%20Mithra%21%20I%27d%20love%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="info-item-row interactive"
              >
                <div className="info-icon">
                  <WhatsAppIcon />
                </div>
                <div className="info-text">
                  <h5>WhatsApp Chat</h5>
                  <p>Chat Live with Support</p>
                </div>
                <span className="hover-arrow">
                  <ArrowRightIcon />
                </span>
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="map-embed-container">
              <iframe
                src="https://maps.google.com/maps?q=10.8319829,76.0595034&z=17&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 'var(--radius-lg)', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Taste Mithra Location"
              />
              <a
                href="https://maps.app.goo.gl/Rp9Q99pcp2Gs1geu5"
                target="_blank"
                rel="noopener noreferrer"
                className="map-open-link"
              >
                <MapPinIcon /> Open in Google Maps <ArrowRightIcon />
              </a>
            </div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="contact-form-col">
            <div className="form-wrapper glass-panel">
              <div className="form-header">
                <h4>Quick Order Enquiry</h4>
                <p>Fill out the form and it will automatically generate your WhatsApp enquiry!</p>
              </div>

              <form onSubmit={handleSubmit} className="premium-form">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Your Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Product Select */}
                <div className="form-group">
                  <label htmlFor="product">Product of Interest</label>
                  <select
                    id="product"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  >
                    <option value="" disabled>Choose...</option>
                    <optgroup label="Oils">
                      <option value="Coconut Oil">Coconut Oil</option>
                      <option value="Sesame Oil">Sesame Oil</option>
                    </optgroup>
                    <optgroup label="Rice & Grain Flours">
                      <option value="Rice Powder">Rice Powder</option>
                      <option value="Roasted Rice Powder">Roasted Rice Powder</option>
                      <option value="Steamed Rice Powder">Steamed Rice Powder</option>
                      <option value="Wheat Powder">Wheat Powder</option>
                      <option value="Ragi Powder">Ragi Powder</option>
                      <option value="Roasted Rava">Roasted Rava</option>
                    </optgroup>
                    <optgroup label="Puttu Powders">
                      <option value="Steamed Rice Puttu Powder">Steamed Rice Puttu Powder</option>
                      <option value="Steamed Wheat Puttu Powder">Steamed Wheat Puttu Powder</option>
                      <option value="Steam-Made Ragi Puttu Powder">Steam-Made Ragi Puttu Powder</option>
                      <option value="Steamed Cholam Puttu Powder">Steamed Cholam (Corn) Puttu Powder</option>
                    </optgroup>
                    <optgroup label="Spice Powders">
                      <option value="Chilli Powder">Chilli Powder</option>
                      <option value="Kashmiri Chilli Powder">Kashmiri Chilli Powder</option>
                      <option value="Coriander Powder">Coriander Powder</option>
                      <option value="Turmeric Powder">Turmeric Powder</option>
                      <option value="Pepper Powder">Pepper Powder</option>
                    </optgroup>
                    <optgroup label="Masalas & Seasonings">
                      <option value="Sambar Powder">Sambar Powder</option>
                      <option value="Chicken Masala">Chicken Masala</option>
                      <option value="Garam Masala">Garam Masala</option>
                      <option value="Chutney Powder">Chutney Powder</option>
                      <option value="Achar Podi">Achar Podi</option>
                    </optgroup>
                    <optgroup label="Traditional Products">
                      <option value="Avilose Podi">Avilose Podi</option>
                    </optgroup>
                    <option value="All Products">Interested in All Products / Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message / Custom Requests</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Explain what packaging sizes or quantities you need..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="pill-nav-btn btn-wa-green form-submit-btn" suppressHydrationWarning>
                  <WhatsAppIcon size={18} />
                  Submit Order to WhatsApp
                </button>

                {submitted && (
                  <div className="success-toast">
                    Enquiry processed! Opening WhatsApp to send your message...
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 0;
          background: var(--bg-elevated);
          position: relative;
          overflow: hidden;
        }

        .ambient-spot {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.08;
          z-index: 1;
          pointer-events: none;
        }

        .glow-3 {
          top: 40%;
          right: -100px;
          width: 400px;
          height: 400px;
          background: var(--primary);
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-section-badge {
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

        .contact-badge-dot {
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

        /* Grid Setup */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          position: relative;
          z-index: 2;
        }

        /* Left Column */
        .contact-info-col {
          display: flex;
          flex-direction: column;
        }

        .info-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 12px;
        }

        .info-desc {
          font-family: var(--font-body);
          font-size: 1.02rem;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 35px;
        }

        .info-card-combined {
          display: flex !important;
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 0 !important;
          padding: 0 !important;
          overflow: hidden;
          margin-bottom: 35px;
        }

        .info-item-row {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 24px;
          position: relative;
          transition: all 0.3s ease;
          background: #ffffff;
        }

        .info-item-row.interactive {
          cursor: pointer;
        }

        .info-item-row.interactive:hover {
          background: rgba(14, 139, 90, 0.05) !important;
        }

        .info-item-row.interactive:hover .info-icon {
          background: var(--primary) !important;
          color: #ffffff !important;
        }

        .info-item-row.interactive:hover .info-icon svg {
          stroke: #ffffff !important;
        }

        .info-item-row.interactive:hover .hover-arrow {
          transform: translateX(5px);
        }

        .info-item-row.interactive:hover .hover-arrow svg {
          stroke: var(--primary) !important;
        }

        .info-item-divider {
          height: 1.5px;
          background: rgba(14, 139, 90, 0.12);
          margin: 0 24px;
        }

        .info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(14, 139, 90, 0.08);
          color: var(--primary);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .info-icon svg {
          width: 20px;
          height: 20px;
          stroke: var(--primary) !important;
          stroke-width: 2.5;
          transition: all 0.3s ease;
        }

        .info-text {
          flex-grow: 1;
          padding-right: 32px;
        }

        .info-text h5 {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 4px;
        }

        .info-text p {
          font-family: var(--font-body);
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .hover-arrow {
          position: absolute;
          right: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .hover-arrow svg {
          width: 18px;
          height: 18px;
          stroke: var(--text-muted) !important;
          transition: stroke 0.3s ease;
        }

        /* Map Embed */
        .map-embed-container {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(var(--primary-raw), 0.18);
          box-shadow: 0 12px 32px rgba(6, 64, 43, 0.1);
        }

        .map-open-link {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(14, 139, 90, 0.85) !important;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
          border-radius: 999px !important;
          color: #FFDF00 !important;
          font-family: var(--font-body);
          font-size: 0.82rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.06em;
          text-align: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          z-index: 10;
          white-space: nowrap;
        }

        .map-open-link svg {
          width: 15px;
          height: 15px;
          stroke: #FFDF00 !important;
          transition: transform 0.3s ease;
        }

        .map-open-link:hover {
          background: var(--primary) !important;
          color: #ffffff !important;
          transform: translateX(-50%) translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(14, 139, 90, 0.3) !important;
        }

        .map-open-link:hover svg {
          stroke: #ffffff !important;
        }

        .map-open-link:hover svg:last-child {
          transform: translateX(3px);
        }

        /* Right Column Form */
        .form-wrapper {
          padding: 40px;
          border-radius: var(--radius-lg);
          background: var(--bg-card-strong) !important;
          border-color: var(--primary) !important;
        }

        .form-header {
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(76, 66, 18, 0.08);
          padding-bottom: 18px;
        }

        .form-header h4 {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 6px;
        }

        .form-header p {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .premium-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: 0.5px;
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(76, 66, 18, 0.12);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          font-size: 0.95rem;
          color: var(--text-light);
          transition: all 0.3s ease;
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(var(--primary-raw), 0.16);
          background: #FFFFFF;
        }

        .form-group select option {
          background: #fffbe6;
          color: var(--text-light);
        }

        form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) {
          width: 100% !important;
          justify-content: center !important;
          margin-top: 10px !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
          
          /* Matches 'Our Finest Collection' button style */
          background: #0E8B5A !important;
          background-color: #0E8B5A !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          border: 2px solid #222222 !important;
          border-radius: 999px !important;
          box-shadow: 0 4px 0px #222222 !important;
          padding: 12px 30px !important;
          font-size: 0.9rem !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
          display: inline-flex !important;
          align-items: center !important;
          stroke: none !important;
        }

        form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close):hover {
          background: #FF7A00 !important;
          background-color: #FF7A00 !important;
          color: #000000 !important;
          box-shadow: 0 6px 0px #222222 !important;
          transform: translateY(-3px) scale(1.02) !important;
          border-color: #222222 !important;
        }

        form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close):active {
          transform: translateY(1px) !important;
          box-shadow: 0 1px 0px #222222 !important;
        }

        form.premium-form button.form-submit-btn svg.custom-wa-icon.monochromatic,
        form.premium-form button.form-submit-btn svg.custom-wa-icon.monochromatic path {
          fill: #000000 !important;
        }

        @media (max-width: 600px) {
          form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) {
            font-size: 0.64rem !important;
            padding: 9px 14px !important;
            gap: 5px !important;
            letter-spacing: 0.03em !important;
          }
          form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) svg {
            width: 14px !important;
            height: 14px !important;
            flex-shrink: 0;
          }
        }

        @media (max-width: 420px) {
          form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) {
            font-size: 0.58rem !important;
            padding: 8px 10px !important;
            gap: 4px !important;
            letter-spacing: 0.02em !important;
            white-space: normal;
            text-align: center;
            line-height: 1.3;
          }
          form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) svg {
            width: 13px !important;
            height: 13px !important;
            flex-shrink: 0;
          }
        }

        @media (max-width: 320px) {
          form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) {
            font-size: 0.52rem !important;
            padding: 7px 8px !important;
            gap: 3px !important;
          }
        }

        .success-toast {
          background: rgba(var(--primary-raw), 0.12);
          border: 1px solid var(--primary);
          color: var(--text-light);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.88rem;
          text-align: center;
          animation: fadeInUp 0.4s ease forwards;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .contact-section {
            padding: 70px 0;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .form-wrapper {
            padding: 30px 20px;
          }
          .section-title {
            font-size: 2rem !important;
          }
          .info-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .contact-section {
            padding: 50px 0;
          }
          .section-header {
            margin-bottom: 36px;
          }
          .section-title {
            font-size: 1.6rem !important;
            line-height: 1.25 !important;
          }
          .contact-section-badge {
            font-size: 0.72rem;
            padding: 5px 11px;
          }
          .info-title {
            font-size: 1.25rem;
          }
          .info-desc {
            font-size: 0.92rem;
            margin-bottom: 22px;
          }
          .info-item-row {
            padding: 16px 14px;
            gap: 12px;
          }
          .info-icon {
            width: 36px;
            height: 36px;
          }
          .info-text {
            padding-right: 24px;
          }
          .info-text h5 {
            font-size: 0.88rem;
          }
          .info-text p {
            font-size: 0.8rem;
          }
          .hover-arrow {
            right: 14px;
          }
          .map-open-link {
            font-size: 0.72rem !important;
            padding: 8px 14px;
          }
          .form-wrapper {
            padding: 24px 16px;
          }
          form.premium-form button.form-submit-btn:not(.mobile-toggle-btn):not(.modal-close) {
            font-size: 0.68rem !important;
            padding: 10px 14px !important;
            gap: 6px !important;
            white-space: nowrap !important;
          }
        }

        @media (max-width: 420px) {
          .section-title {
            font-size: 1.35rem !important;
          }
          .info-item-row {
            padding: 12px 10px;
            gap: 10px;
          }
          .info-icon {
            width: 32px;
            height: 32px;
          }
          .info-icon svg {
            width: 16px;
            height: 16px;
          }
          .info-text h5 {
            font-size: 0.82rem;
          }
          .info-text p {
            font-size: 0.75rem;
          }
          .form-wrapper {
            padding: 20px 12px;
          }
          .form-header h4 {
            font-size: 1.1rem;
          }
          .form-header p {
            font-size: 0.8rem;
          }
        }
        @media (max-width: 392px) {
          .contact-section {
            padding: 36px 0;
            overflow-x: hidden;
          }
          .contact-section .container {
            padding: 0 10px !important;
          }
          .section-header {
            margin-bottom: 24px;
          }
          .section-title {
            font-size: 1.15rem !important;
            line-height: 1.2 !important;
            word-break: break-word;
          }
          .contact-section-badge {
            font-size: 0.6rem !important;
            padding: 4px 8px !important;
            letter-spacing: 0.02em !important;
            max-width: 100%;
          }
          .header-divider {
            width: 40px;
          }
          .contact-grid {
            gap: 24px;
          }
          .info-title {
            font-size: 1rem !important;
          }
          .info-desc {
            font-size: 0.78rem !important;
            margin-bottom: 14px !important;
            line-height: 1.45;
          }
          .info-card-combined {
            margin-bottom: 18px !important;
          }
          .info-item-row {
            padding: 10px 8px !important;
            gap: 8px !important;
            flex-wrap: nowrap;
          }
          .info-icon {
            width: 28px !important;
            height: 28px !important;
            flex-shrink: 0;
          }
          .info-icon svg {
            width: 13px !important;
            height: 13px !important;
          }
          .info-text {
            padding-right: 20px !important;
            min-width: 0;
            overflow: hidden;
          }
          .info-text h5 {
            font-size: 0.75rem !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .info-text p {
            font-size: 0.68rem !important;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .hover-arrow {
            right: 8px !important;
          }
          .hover-arrow svg {
            width: 13px !important;
            height: 13px !important;
          }
          .map-embed-container iframe {
            height: 160px;
          }
          .map-open-link {
            font-size: 0.6rem !important;
            padding: 6px 10px !important;
            gap: 4px !important;
            white-space: nowrap;
            max-width: calc(100% - 20px);
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .form-wrapper {
            padding: 16px 10px !important;
            border-radius: 16px !important;
          }
          .form-header {
            margin-bottom: 18px;
          }
          .form-header h4 {
            font-size: 0.95rem !important;
          }
          .form-header p {
            font-size: 0.7rem !important;
          }
          .form-group label {
            font-size: 0.72rem !important;
          }
          .form-group input,
          .form-group select,
          .form-group textarea {
            font-size: 0.78rem !important;
            padding: 9px 10px !important;
          }
          .form-submit-btn {
            font-size: 0.62rem !important;
            padding: 9px 10px !important;
            gap: 4px !important;
          }
          .glow-3 {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};
