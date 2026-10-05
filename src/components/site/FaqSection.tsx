import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export const HOME_FAQS = [
  {
    q: "What types of metal polishing machines do you manufacture?",
    a: "As a leading industrial polishing machine manufacturer, we design and supply a comprehensive range of high-efficiency systems, including automatic polishing machines, automatic buffing machine setups, and heavy-duty surface finishing machines tailored for diverse industrial applications."
  },
  {
    q: "Are your industrial buffing machines suitable for high-volume production lines?",
    a: "Yes, our industrial buffing machines and polishing and buffing machines are engineered for continuous, heavy-duty operation. They deliver consistent surface finish quality, minimize manual labor, and seamlessly integrate into automated manufacturing lines."
  },
  {
    q: "Can these metal finishing machines handle different metal types like stainless steel, brass, and aluminum?",
    a: "Absolutely. Our advanced metal finishing machines feature adjustable speed controls, specialized contact wheels, and customizable fixtures to process various metals, ensuring a mirror finish or desired micro-inch texture without damaging the material."
  },
  {
    q: "Do you offer custom specifications for specialized industrial polishing machines?",
    a: "Yes. Being a trusted polishing machine manufacturer in India, we specialize in building custom-engineered industrial polishing machines designed precisely according to your component dimensions, production output targets, and factory space constraints."
  }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": HOME_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="section-shell bg-[#faf6ed] py-24 border-t border-black/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="industrial-badge mx-auto mb-4">
            <HelpCircle className="size-3 text-primary inline mr-1" />
            Common Inquiries
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase text-stone-950 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-stone-600 font-medium max-w-xl mx-auto">
            Get clear technical answers regarding our industrial polishing machinery, automation capabilities, and custom SPM engineering.
          </p>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                    {faq.q}
                  </span>
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/20 text-primary" : ""
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="border-t border-black/5 px-6 pb-6 pt-4 text-xs sm:text-sm text-stone-600 leading-relaxed font-medium bg-[#faf6ed]/30 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
