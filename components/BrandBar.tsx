"use client";

import Image from "next/image";

const BRANDS = [
  "Gildan",
  "American Apparel",
  "Bella+Canvas",
  "Next Level",
  "Flexfit",
  "Yupoong",
  "adidas",
  "Nike",
  "Under Armour",
  "Champion",
  "Comfort Colors",
  "New Era",
  "Richardson",
  "Carhartt",
  "Behind The Scenes",
  "Port Authority",
  "Hanes",
  "Sport-Tek",
  "District",
];

/**
 * BrandBar — Auto-scrolling brand logo marquee
 *
 * PRODUCTION: Replace the <span> text placeholders with <Image> components:
 *   <Image src={`/brands/${slug}.png`} alt={name} width={120} height={40} className="..." />
 *
 * For now, renders text logos styled in the Westfield Threads design system.
 */
export default function BrandBar() {
  // Triple the brands for seamless infinite loop
  const allBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="bg-white border-b border-black/5 py-9 overflow-hidden relative">
      {/* Heading */}
      <p className="text-center font-body font-extrabold tracking-[0.12em] uppercase text-[11px] text-black/[.38] mb-5 px-6">
        Trusted Brands We Carry
      </p>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: "brand-scroll 55s linear infinite" }}
      >
        {allBrands.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex items-center justify-center min-w-[160px] h-12 px-7 flex-shrink-0 select-none group"
          >
            {/*
              TODO: Replace with actual logo images
              <Image
                src={`/brands/${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`}
                alt={name}
                width={120}
                height={40}
                className="h-8 w-auto opacity-35 group-hover:opacity-70 transition-opacity duration-250"
              />
            */}
            <span
              className={`
                font-display font-bold tracking-[0.06em] uppercase text-teal opacity-35
                group-hover:opacity-70 transition-opacity duration-250 whitespace-nowrap
                ${name === "adidas" ? "lowercase tracking-[0.10em] text-[15px]" : ""}
                ${name.length > 14 ? "text-[13px]" : "text-[15px]"}
              `}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
