import React from "react";

interface MadeInIndiaLogoProps {
  className?: string;
  size?: number;
}

export const MadeInIndiaLogo: React.FC<MadeInIndiaLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="indiaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#AA7C11" />
          <stop offset="100%" stopColor="#F3E5AB" />
        </linearGradient>
        <linearGradient id="indiaTricolor" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#128807" />
        </linearGradient>
      </defs>
      
      {/* Outer gear ring */}
      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#indiaGold)" strokeWidth="3" strokeDasharray="4 2" />
      <circle cx="50" cy="50" r="37" fill="none" stroke="url(#indiaGold)" strokeWidth="1" />
      
      {/* Dynamic central gear teeth */}
      <g fill="url(#indiaGold)">
        {[...Array(12)].map((_, i) => (
          <path
            key={i}
            d="M47 8h6l2 8h-10z"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </g>
      
      {/* Inner solid ring */}
      <circle cx="50" cy="50" r="28" fill="#0C0A09" stroke="url(#indiaGold)" strokeWidth="1.5" />
      
      {/* Center Lion silhouette & wheel detail */}
      <g transform="translate(30, 32) scale(0.4)" fill="url(#indiaGold)">
        {/* Stylized lion body made of mechanical arcs */}
        <path d="M10 20 C15 5, 30 5, 45 10 C55 12, 65 5, 75 15 C85 25, 95 30, 95 45 C95 60, 80 65, 70 65 C60 65, 55 55, 45 55 C35 55, 30 65, 15 65 C5 65, 0 50, 0 40 C0 30, 5 20, 10 20 Z" />
        <circle cx="48" cy="35" r="8" fill="#0C0A09" />
        <circle cx="30" cy="40" r="5" fill="#0C0A09" />
        {/* Gear spoke cuts in the body */}
        <path d="M35 18 L55 18 L45 35 Z" fill="#0C0A09" />
        <path d="M60 25 L75 35 L55 45 Z" fill="#0C0A09" />
        <path d="M20 30 L40 32 L30 48 Z" fill="#0C0A09" />
      </g>
      
      {/* Ashok chakra center dot indicator */}
      <circle cx="50" cy="50" r="3" fill="url(#indiaTricolor)" />
    </svg>
  );
};
export default MadeInIndiaLogo;
