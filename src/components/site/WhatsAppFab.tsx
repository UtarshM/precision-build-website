import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => {
  const phone = "919175282992";
  const message = encodeURIComponent(
    "Hi M.B. Finishing Technologies, I would like to know more about your buffing and polishing machines."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 md:size-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-pulse-glow"
      style={{ boxShadow: "0 10px 40px -10px rgba(37, 211, 102, 0.6)" }}
    >
      <MessageCircle className="size-6 md:size-7 fill-white" />
    </a>
  );
};
