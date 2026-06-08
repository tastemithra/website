import Image from 'next/image';
import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  width = 120,
  height = 120,
}) => {
  return (
    <div
      className={`logo-wrapper ${className}`}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        display: 'inline-block',
      }}
    >
      {/* Background glow / backlight */}
      <div className="logo-backlight" />

      {/* Logo image */}
      <div className="logo-image-container">
        <Image
          src="/logo.png"
          alt="Taste Mithra logo"
          fill
          sizes={`${width}px`}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      <style>{`
        .logo-wrapper {
          filter: drop-shadow(0 0 3px rgba(255,255,255,1)) 
                  drop-shadow(0 0 8px rgba(255,255,255,0.85));
        }
        .logo-backlight {
          position: absolute;
          inset: 26%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0) 100%);
          box-shadow: 0 0 8px 6px rgba(255, 255, 255, 1),
                      0 0 16px 10px rgba(255, 255, 255, 0.7);
          filter: blur(4px);
          z-index: 1;
          pointer-events: none;
          opacity: 1;
        }
        .logo-image-container {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};
