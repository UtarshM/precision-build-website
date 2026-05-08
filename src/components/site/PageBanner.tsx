type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const PageBanner = ({
  eyebrow,
  title,
  description,
}: PageBannerProps) => {
  const hasContent = eyebrow || title || description;

  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(60,45,22,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(60,45,22,0.55) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <div className="container relative">
        <div className="premium-panel max-w-5xl p-8 md:p-12">
          {hasContent ? (
            <>
              {eyebrow ? (
                <div className="industrial-badge mb-6">{eyebrow}</div>
              ) : null}
              {title ? (
                <h1 className="font-display text-5xl leading-[0.9] tracking-tight text-stone-950 md:text-7xl">
                  {title}
                </h1>
              ) : null}
              {description ? (
                <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {description}
                </p>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
};
