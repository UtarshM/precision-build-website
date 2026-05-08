import { useState } from "react";
import { z } from "zod";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Please share your machine requirement").max(1000),
});

export const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Inquiry sent",
        description: "Our team will connect with you shortly.",
      });
      setForm({ name: "", phone: "", email: "", message: "" });
    }, 900);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="industrial-badge mb-6">Contact With Us</div>
            <h2 className="font-heading text-4xl md:text-6xl uppercase tracking-tight leading-[0.95] mb-6 text-balance text-stone-950">
              Professional support for your <span className="text-primary">machine requirements</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Share your polishing, buffing or special-purpose machine
              requirement and our team will guide you toward the right solution.
            </p>

            <div className="space-y-6 mb-10">
              <a href="tel:+919175282992" className="flex items-center gap-5 group">
                <div className="shrink-0 size-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">
                    Phone
                  </div>
                  <div className="font-heading text-lg group-hover:text-primary transition-colors text-stone-950">
                    +91-9175282992
                  </div>
                </div>
              </a>
              <a href="tel:+918956648126" className="flex items-center gap-5 group">
                <div className="shrink-0 size-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">
                    Alternate Phone
                  </div>
                  <div className="font-heading text-lg group-hover:text-primary transition-colors text-stone-950">
                    +91-8956648126
                  </div>
                </div>
              </a>
              <a href="mailto:info@mbtools.in" className="flex items-center gap-5 group">
                <div className="shrink-0 size-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="size-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">
                    Email
                  </div>
                  <div className="font-heading text-lg group-hover:text-primary transition-colors text-stone-950">
                    info@mbtools.in
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <div className="shrink-0 size-12 rounded-full border-2 border-primary flex items-center justify-center mt-1">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">
                    M.B. Finishing Technologies
                  </div>
                  <div className="font-heading text-lg leading-snug text-stone-950">
                    Plot No. T-165/15/1, T- Block, Next to Trishul Auto, Bhosari,
                    MIDC, Pune - 411 026.
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[16/10] rounded-[1.75rem] border border-primary/10 overflow-hidden shadow-[0_18px_60px_-40px_rgba(20,20,20,0.3)]">
              <iframe
                title="M.B. Finishing Technologies location"
                src="https://www.google.com/maps?q=Bhosari%20MIDC%20Pune&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] p-8 md:p-10 bg-[#fbf7ef] border border-primary/10 shadow-[0_20px_70px_-42px_rgba(20,20,20,0.28)]"
          >
            <h3 className="font-heading text-2xl uppercase mb-8 text-stone-950">
              Product Inquiry
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  maxLength={100}
                  className="w-full rounded-xl px-4 py-3 bg-white border border-primary/15 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                    maxLength={30}
                    className="w-full rounded-xl px-4 py-3 bg-white border border-primary/15 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    maxLength={255}
                    className="w-full rounded-xl px-4 py-3 bg-white border border-primary/15 focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-2">
                  Machine requirement
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  maxLength={1000}
                  className="w-full rounded-xl px-4 py-3 bg-white border border-primary/15 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us which product or application you need..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full mt-2 group flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
