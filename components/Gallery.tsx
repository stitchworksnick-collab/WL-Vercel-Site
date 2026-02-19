"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const FILTERS = [
  { label: "All Work", value: "all" },
  { label: "Embroidery", value: "embroidery" },
  { label: "Chainstitch", value: "chainstitch" },
  { label: "Screen Printing", value: "screen-printing" },
  { label: "Full-Color Heat Transfer", value: "dtf" },
];

const GALLERY_ITEMS = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/fc2e1930-9dca-40e0-9846-10e19bedeac2/ChatGPT+Image+Feb+9%2C+2026%2C+08_55_10+PM.png?format=750w",
    alt: "Custom embroidered design stitched in Westfield NJ",
    category: "embroidery",
    label: "Embroidery",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/c47c51b5-a90e-4ab6-b998-f7e7295839aa/ChatGPT+Image+Feb+10%2C+2026%2C+07_35_09+AM.png?format=750w",
    alt: "Screen printed Westfield Threads graphic tee",
    category: "screen-printing",
    label: "Screen Printing",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/befd53a9-6180-4669-8ddb-6b3ebc4a3b95/ChatGPT+Image+Feb+10%2C+2026%2C+08_12_39+AM.png?format=750w",
    alt: "Embroidered New Jersey crewneck sweatshirt",
    category: "embroidery",
    label: "Embroidery",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/04ad1a5a-ddec-48bf-bd5f-494e53afc89b/ChatGPT+Image+Feb+10%2C+2026%2C+08_14_47+AM.png?format=750w",
    alt: "Embroidered baby blanket with custom name",
    category: "embroidery",
    label: "Embroidery",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/18c2ace2-c660-42a0-8c89-d01fc9784166/ChatGPT+Image+Feb+9%2C+2026%2C+08_18_54+AM.png?format=750w",
    alt: "Custom embroidered logo on a hat by Westfield Threads",
    category: "embroidery",
    label: "Embroidery",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/7f3e5326-22a0-41b6-9107-87560057bf7a/ChatGPT+Image+Feb+9%2C+2026%2C+06_44_16+AM.png?format=750w",
    alt: "Hand-guided chainstitch embroidery with textured lettering",
    category: "chainstitch",
    label: "Chainstitch",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/68cfec9d-16c9-4999-a87c-9a1345690d90/ChatGPT+Image+Feb+9%2C+2026%2C+07_11_31+AM.png?format=750w",
    alt: "Full-color heat transfer print on a custom tee",
    category: "dtf",
    label: "Full-Color Heat Transfer",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/daf789eb-71ba-417e-a8b4-fe325b778a13/ChatGPT+Image+Feb+9%2C+2026%2C+07_03_09+AM.png?format=750w",
    alt: "Screen printed custom t-shirts for teams and events",
    category: "screen-printing",
    label: "Screen Printing",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <section className="bg-[#F7FAFA] border-t border-black/5 border-b border-black/5">
      <div className="max-w-page mx-auto px-6 py-14">
        <ScrollReveal>
          <div className="text-center mb-5">
            <h2 className="font-display text-[clamp(2.1rem,5.6vw,3.4rem)] font-black leading-[1.12] uppercase">
              Recent Work
            </h2>
            <p className="mt-3.5 mx-auto max-w-[72ch] text-black/[.68] text-base leading-relaxed">
              Some of what we&apos;ve been working on.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap my-6 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`
                px-5 py-2.5 rounded-full font-display text-xs font-black uppercase tracking-[0.08em]
                transition-all duration-150 ease-out
                shadow-[0_8px_18px_rgba(0,0,0,0.04)]
                ${
                  active === f.value
                    ? "bg-teal text-cream border-teal shadow-button"
                    : "bg-white text-black/[.58] border border-teal/10 hover:-translate-y-0.5 hover:border-teal/25"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {filtered.map((item, i) => (
            <ScrollReveal key={`${item.src}-${i}`} delay={i * 80}>
              <div className="group relative h-[320px] sm:h-[280px] lg:h-[320px] rounded-[20px] overflow-hidden border border-teal/[.15] shadow-[0_14px_38px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(18,56,66,0.16)] hover:border-teal/[.30]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[450ms] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal/[.78] to-teal-dark/[.65] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="bg-cream text-teal text-xs font-black uppercase tracking-[0.08em] px-4 py-2.5 rounded-full shadow-[0_12px_26px_rgba(0,0,0,0.15)] font-body">
                    {item.label}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
