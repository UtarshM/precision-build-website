import { useState, useEffect } from "react";
import { X } from "lucide-react";
import expoBanner from "@/assets/expo-announcement.jpg";

export const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user already saw the announcement in the current session
    const hasSeen = sessionStorage.getItem("hasSeenAnnouncement");
    if (!hasSeen) {
      // Small delay for a polished entry transition
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenAnnouncement", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl border border-stone-200/80 animate-scale-in">
        {/* Rounded Glass Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full bg-stone-950/80 text-white backdrop-blur-md hover:bg-stone-950 transition-all shadow-md hover:scale-105"
          aria-label="Close Announcement"
        >
          <X className="size-4" />
        </button>

        {/* Content Image Poster */}
        <div className="w-full flex items-center justify-center bg-white">
          <img
            src={expoBanner}
            alt="Pharma Pro & Pack Expo 2026 - M.B. Finishing Technologies Exhibition Announcement"
            className="w-full h-auto max-h-[80vh] object-contain block"
          />
        </div>
      </div>
    </div>
  );
};
