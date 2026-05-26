import React from "react";
import makeInIndiaImg from "@/assets/make-in-india.png";

interface MadeInIndiaLogoProps {
  className?: string;
  size?: number;
}

export const MadeInIndiaLogo: React.FC<MadeInIndiaLogoProps> = ({ className = "", size = 24 }) => {
  return (
    <img
      src={makeInIndiaImg}
      alt="Make in India"
      style={{ width: size, height: "auto" }}
      className={`shrink-0 object-contain ${className}`}
    />
  );
};

export default MadeInIndiaLogo;
