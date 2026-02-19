import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shirt, FileCheck, Zap, RefreshCw } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BrandBar from "@/components/BrandBar";
import Gallery from "@/components/Gallery";
import StorefrontSignup from "@/components/StorefrontSignup";

export const metadata: Metadata = {
  title: "Westfield Threads — Custom Embroidery & Print in Westfield, NJ",
  description:
    "Custom embroidery, chainstitch, screen printing, and full-color heat transfer. Clear quotes, reliable turnaround, and consistent execution for businesses, schools, and individuals.",
};

/* ---------- DATA ---------- */

const SERVICES = [
  {
    title: "Custom Embroidery",
    text: "Durable, clean stitching that holds up to washing, wearing, and everyday use.",
    meta: "logos, names, monograms, and simple designs.",
    image:
      "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/18c2ace2-c660-42a0-8c89-d01fc9784166/ChatGPT+Image+Feb+9%2C+2026%2C+08_18_54+AM.png?format=2500w",
    alt: "Custom embroidered logo on a hat by Westfield Threads",
  },
  {
    title: "Chainstitch Embroidery",
    text: "Hand-guided stitching with real character and texture. Every piece is one of a kind, great for heirlooms.",
    meta: "names, lettering, and simple shapes on heavier fabrics.",
    image:
      "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/7f3e5326-22a0-41b6-9107-87560057bf7a/ChatGPT+Image+Feb+9%2C+2026%2C+06_44_16+AM.png?format=750w",
    alt: "Hand-guided chainstitch embroidery with textured lettering",
  },
  {
    title: "Full-Color Heat Transfer",
    text: "Detailed, full-color prints that work great for small runs or one-off projects.",
    meta: "detailed artwork, gradients, and photo-style designs.",
    image:
      "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/68cfec9d-16c9-4999-a87c-9a1345690d90/ChatGPT+Image+Feb+9%2C+2026%2C+07_11_31+AM.png?format=750w",
    alt: "Full-color heat transfer print on a custom tee",
  },
  {
    title: "Screen Printing",
    text: "Classic, reliable printing. Gets better and more cost-effective as quantities go up.",
    meta: "simple color designs and larger runs.",
    image:
      "https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/daf789eb-71ba-417e-a8b4-fe325b778a13/ChatGPT+Image+Feb+9%2C+2026%2C+07_03_09+AM.png?format=2500w",
    alt: "Screen printed custom t-shirts for teams and events",
  },
];

const WHY_CARDS = [
  {
    icon: Shirt,
    title: "All Embroidery In-House",
    text: "Every embroidery project is stitched in our studio. We control the quality and the timeline.",
  },
  {
    icon: FileCheck,
    title: "Proof Before Production",
    text: "You see a proof with placement and sizing before we stitch or print a thing. No guessing.",
  },
  {
    icon: Zap,
    title: "Clear Quotes, Fast",
    text: "We'll get back to you with pricing and a timeline within 1–2 business days. No \"call for a quote\" runaround.",
  },
  {
    icon: RefreshCw,
    title: "Built for Reorders",
    text: "Once your logo and placements are set, reordering is simple and consistent. Same result every time.",
  },
];

const AUDIENCES = [
  {
    label: "Individuals",
    text: "Gifts, keepsakes, and personal pieces — made exactly how you want them.",
  },
  {
    label: "Schools",
    text: "Spiritwear, team gear, and staff apparel with a process built for groups.",
  },
  {
    label: "Businesses",
    text: "Uniforms, branded apparel, and repeatable programs that scale with you.",
  },
];

/* ---------- JSON-LD ---------- */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Westfield Threads",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lennox Ave",
    addressLocality: "Westfield",
    addressRegion: "NJ",
    postalCode: "07090",
    addressCountry: "USA",
  },
  telephone: "+1-908-543-4291",
  email: "Hi@westfieldthreads.com",
  url: "https://westfieldthreads.com",
  areaServed: [
    "Westfield NJ",
    "Cranford NJ",
    "Scotch Plains NJ",
    "Essex County",
    "Union County",
    "NYC Area",
  ],
  description:
    "Custom embroidery, chainstitch, screen printing, and Full-Color Heat Transfer with clear quotes, reliable turnaround, and consistent execution for businesses, schools, and individuals.",
  priceRange: "$$",
  geo: { "@type": "GeoCoordinates", latitude: 40.6589, longitude: -74.3468 },
};

/* ---------- PAGE ---------- */

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ==================== HERO ==================== */}
      <section
        className="relative min-h-[640px] h-[75vh] flex items-center justify-center overflow-hidden bg-cover bg-center max-md:min-h-[560px] max-md:h-auto max-md:py-16"
        style={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/108862bf-5cd4-40b9-bcec-9703de61bb0b/ChatGPT+Image+Feb+9%2C+2026%2C+08_51_25+AM.png?format=2500w')",
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-[980px]">
          <div className="inline-block bg-teal/40 border border-teal/55 text-white/95 px-4 py-2.5 rounded-full text-[11px] font-extrabold tracking-[0.12em] uppercase mb-5 backdrop-blur-lg shadow-[0_8px_32px_rgba(18,56,66,0.12)]">
            Westfield, NJ | Accepting Projects Now
          </div>

          <h1 className="font-display text-[clamp(2.8rem,8.5vw,5.6rem)] font-black leading-[1.04] mb-5 bg-gradient-to-br from-gray-500 to-black bg-clip-text text-transparent normal-case max-md:text-[clamp(2rem,7vw,3.5rem)]">
            Made thoughtfully and built to last.
          </h1>

          <p className="mx-auto max-w-[70ch] text-base leading-[1.85] text-black font-medium mb-2">
            Custom embroidery, screen printing, and garment decoration for
            businesses, schools, and people who care about quality.
          </p>

          <div className="flex gap-3.5 flex-wrap items-center justify-center mt-7 max-md:flex-col">
            <Link
              href="/contact"
              className="wl-btn-primary px-7 py-3.5 shadow-[0_12px_26px_rgba(18,56,66,0.28)] no-underline"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-body font-black text-[13px] uppercase tracking-[0.08em] text-black bg-black/[.08] border-2 border-black/25 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-black/[.15] hover:border-black/45 whitespace-nowrap no-underline max-md:w-full"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== BRAND BAR ==================== */}
      <BrandBar />

      {/* ==================== WHAT WE OFFER ==================== */}
      <section className="bg-[#F7FAFA] border-t border-black/5 border-b border-black/5">
        <div className="max-w-page mx-auto px-6 py-14">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-display text-[clamp(2.1rem,5.6vw,3.4rem)] font-black leading-[1.12] uppercase">
                What We Offer
              </h2>
              <p className="mt-3.5 mx-auto max-w-[72ch] text-black/[.68] text-base leading-relaxed">
                We have 4 core services. Each one serves a different purpose—we&apos;ll
                help you figure out which one makes sense for your project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[18px]">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 100}>
                <div className="bg-white border border-teal/[.08] rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-teal/[.22] group">
                  <div className="h-[220px] bg-teal/[.06] overflow-hidden max-sm:h-[210px]">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      width={600}
                      height={440}
                      className="w-full h-full object-cover transition-transform duration-[350ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-[18px] pb-5">
                    <h3 className="font-display text-[15px] font-black tracking-[0.04em] uppercase mb-2.5">
                      {s.title}
                    </h3>
                    <p className="text-black/[.62] text-sm leading-relaxed mb-2.5">
                      {s.text}
                    </p>
                    <p className="text-black/[.58] text-[13px] leading-snug">
                      <strong className="text-black">Good for:</strong> {s.meta}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-5 text-center text-sm text-black/[.64]">
            Want to know more?{" "}
            <Link
              href="/services"
              className="font-extrabold text-teal no-underline border-b-2 border-teal/25 hover:border-teal/55 transition-colors"
            >
              See all services
            </Link>
            .
          </div>
        </div>
      </section>

      {/* ==================== WHY WESTFIELD THREADS ==================== */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-page mx-auto px-6 py-14">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="font-display text-[clamp(2.1rem,5.6vw,3.4rem)] font-black leading-[1.12] uppercase">
                Why Westfield Threads
              </h2>
              <p className="mt-3.5 mx-auto max-w-[72ch] text-black/[.68] text-base leading-relaxed">
                What you can expect when you work with us.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[18px]">
            {WHY_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="bg-white border border-teal/[.08] rounded-2xl p-7 pb-6 shadow-[0_10px_26px_rgba(0,0,0,0.04)] transition-all duration-150 hover:border-teal/[.22] hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className="w-12 h-12 rounded-xl bg-teal/[.08] text-teal flex items-center justify-center mb-3.5">
                    <card.icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-[15px] font-black tracking-[0.04em] uppercase mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-black/[.62] text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / POLISHED ==================== */}
      <section className="bg-white">
        <div className="max-w-page mx-auto px-6 py-14">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-center max-lg:gap-8">
              {/* Image */}
              <div className="rounded-[20px] overflow-hidden shadow-hero">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/697167ce3c1fff45162a563d/b4edd67f-53e8-4565-8aad-21ade78731f1/ChatGPT+Image+Jan+23%2C+2026%2C+04_37_38+PM.png?format=2500w"
                  alt="Professional custom embroidery in Westfield NJ"
                  width={800}
                  height={1000}
                  className="w-full h-[580px] object-cover max-lg:h-[400px]"
                />
              </div>

              {/* Copy */}
              <div>
                <div className="w-[72px] h-[5px] rounded-full bg-teal shadow-[0_8px_20px_rgba(18,56,66,0.18)] mb-6" />
                <h2 className="font-display text-[clamp(2.1rem,5.6vw,3.4rem)] font-black leading-[1.12] uppercase">
                  We&apos;re in the details so you don&apos;t have to be.
                </h2>
                <p className="mt-4 text-black/[.62] text-base leading-[1.95] max-w-[68ch]">
                  We&apos;re a Westfield-based custom decoration studio offering in-house
                  embroidery and professional print services. Tell us what you&apos;re
                  looking for, we&apos;ll help you choose the right method and take care
                  of the rest.
                </p>
                <p className="mt-3.5 text-black/[.62] text-base leading-[1.95] max-w-[68ch]">
                  Whether it&apos;s 12 polos or 500 hoodies, we treat every project the
                  same way: proof before production, honest recommendations, and no
                  surprises on the invoice.
                </p>

                {/* Audience cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6 max-lg:grid-cols-1">
                  {AUDIENCES.map((a) => (
                    <div
                      key={a.label}
                      className="bg-white border border-teal/[.08] rounded-2xl px-4 pt-4 pb-3.5 shadow-[0_10px_26px_rgba(0,0,0,0.04)] transition-all duration-150 hover:border-teal/[.22] hover:-translate-y-0.5"
                    >
                      <strong className="block font-display text-[13px] font-black uppercase tracking-[0.03em] mb-1.5">
                        {a.label}
                      </strong>
                      <span className="text-black/[.62] text-sm leading-relaxed block">
                        {a.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <Gallery />

      {/* ==================== STOREFRONT COMING SOON ==================== */}
      <section className="bg-gradient-to-br from-teal to-teal-dark text-white">
        <div className="max-w-page mx-auto px-6 py-14">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-lg:gap-8">
              <div>
                <p className="font-body font-extrabold tracking-[0.10em] uppercase text-xs text-cream/80">
                  Coming Soon
                </p>
                <h2 className="font-display text-[clamp(2.1rem,5.6vw,3.4rem)] font-black leading-[1.12] uppercase text-white mt-1">
                  Walk-in storefront
                </h2>
                <p className="mt-4 text-white/[.88] leading-[1.85] text-base max-w-[62ch]">
                  We&apos;re opening a full walk-in studio soon. Drop by and say hello,
                  or get an email when we open.
                </p>
                <div className="w-14 h-1 rounded-full bg-cream mt-6 shadow-[0_10px_22px_rgba(239,227,199,0.18)]" />
              </div>

              <StorefrontSignup />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="bg-white border-t border-black/[.06]">
        <div className="max-w-page mx-auto px-6 py-10">
          <ScrollReveal>
            <div className="bg-white border border-teal/[.08] rounded-[22px] shadow-card p-7">
              {/* Top row */}
              <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[18px] items-center">
                <div>
                  <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-black leading-[1.05] uppercase mb-2">
                    Start your project.
                  </h2>
                  <p className="text-black/[.62] text-base leading-relaxed max-w-[54ch]">
                    Send the item, quantity, placement, and artwork (if you have it).
                    We&apos;ll review the details and reply with pricing and a clear
                    turnaround time.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end items-center">
                  <Link href="/contact" className="wl-btn-primary no-underline">
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-black/[.08]" />

              {/* Contact row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="border border-teal/[.08] rounded-2xl px-4 py-3.5 flex items-center justify-between gap-3 bg-white transition-all duration-150 hover:border-teal/[.22] hover:-translate-y-0.5">
                  <p className="font-body font-black uppercase tracking-[0.08em] text-[11px] text-black/50">
                    Call
                  </p>
                  <a
                    href="tel:+19085434291"
                    className="font-body font-black text-teal text-base no-underline border-b-2 border-teal/25 hover:border-teal/55 transition-colors"
                  >
                    (908) 543-4291
                  </a>
                </div>
                <div className="border border-teal/[.08] rounded-2xl px-4 py-3.5 flex items-center justify-between gap-3 bg-white transition-all duration-150 hover:border-teal/[.22] hover:-translate-y-0.5">
                  <p className="font-body font-black uppercase tracking-[0.08em] text-[11px] text-black/50">
                    Email
                  </p>
                  <a
                    href="mailto:Hi@westfieldthreads.com"
                    className="font-body font-black text-teal text-base no-underline border-b-2 border-teal/25 hover:border-teal/55 transition-colors"
                  >
                    Hi@westfieldthreads.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
