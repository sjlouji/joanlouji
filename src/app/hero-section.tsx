"use client";

export function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] flex items-center py-24 sm:py-32 lg:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-medium leading-tight tracking-tight text-left whitespace-pre-line">
            <span style={{ display: "block", marginBottom: "0.25em" }}>
              Independent
            </span>
            <span style={{ display: "block", marginBottom: "0.25em" }}>
              Product
            </span>
            <span style={{ display: "block" }}>Designer</span>
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-left max-w-2xl">
            Hey, I'm Victor, an Independent Product Designer delivering top-tier{" "}
            <span className="font-semibold">Websites</span>,{" "}
            <span className="font-semibold">SaaS</span>,{" "}
            <span className="font-semibold">Mobile experiences</span>, and good
            vibes for almost two decades.
          </p>
        </div>
      </div>
    </section>
  );
}
