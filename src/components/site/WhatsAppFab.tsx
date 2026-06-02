import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, ExternalLink } from "lucide-react";

export const WhatsAppFab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const message = encodeURIComponent(
    "Hi M.B. Finishing Technologies, I would like to know more about your buffing and polishing machines."
  );

  // Close when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Animated Popover menu */}
      {isOpen && (
        <div className="mb-4 w-72 rounded-2xl border border-black/5 bg-white p-4 shadow-2xl backdrop-blur-xl animate-scale-in text-stone-900">
          <div className="flex justify-between items-center pb-2 border-b border-black/5 mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              Contact WhatsApp
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
          <p className="text-xs text-stone-500 mb-3 leading-relaxed">
            Choose a contact number below to start chat on WhatsApp:
          </p>
          <div className="space-y-2">
            <a
              href={`https://wa.me/919175282992?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 bg-[#25D366]/10 text-stone-900 border border-[#25D366]/15 hover:bg-[#25D366]/20 transition-all font-body text-xs font-semibold"
            >
              <span className="flex flex-col text-left">
                <span>Sales / Inquiries</span>
                <span className="text-[10px] text-stone-500 font-medium">+91-91752 82992</span>
              </span>
              <ExternalLink className="size-3.5 text-[#25D366]" />
            </a>
            <a
              href={`https://wa.me/918956648126?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl px-3.5 py-2.5 bg-[#25D366]/10 text-stone-900 border border-[#25D366]/15 hover:bg-[#25D366]/20 transition-all font-body text-xs font-semibold"
            >
              <span className="flex flex-col text-left">
                <span>Technical Support</span>
                <span className="text-[10px] text-stone-500 font-medium">+91-89566 48126</span>
              </span>
              <ExternalLink className="size-3.5 text-[#25D366]" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="size-14 md:size-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-glow focus:outline-none"
        style={{ boxShadow: "0 10px 40px -10px rgba(37, 211, 102, 0.6)" }}
      >
        <MessageCircle className="size-6 md:size-7 fill-white" />
      </button>
    </div>
  );
};
