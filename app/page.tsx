"use client";

import { useState, useEffect, useRef } from "react";

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}

const SERVICES = [
  { label: "Embroidery", desc: "Stitched in-house. Clean, durable, built to last.", icon: "◈" },
  { label: "Screen Printing", desc: "Bold prints for big runs. Gets cheaper as you scale.", icon: "◉" },
  { label: "Heat Transfer", desc: "Full-color detail on any fabric. No minimums.", icon: "◆" },
  { label: "Chainstitch", desc: "Hand-guided, one-of-a-kind texture. Heirloom quality.", icon: "✦" },
];

const AUDIENCES = [
  { tag: "01", title: "Individuals", headline: "One piece.\nMade yours.", desc: "A monogrammed baby blanket. Your dog's name on a hat. A gift that actually means something. No minimums, no templates — just tell us what you want.", cta: "Start a Personal Project", href: "/individuals", examples: ["Custom gifts", "Monograms", "Personal keepsakes", "One-offs"], image: "/images/audience-individuals.png" },
  { tag: "02", title: "Businesses", headline: "Your team.\nLooking sharp.", desc: "Uniforms, branded polos, company merch — set up once, reorder forever. We save everything so next time takes five minutes.", cta: "Get a Business Quote", href: "/businesses", examples: ["Staff uniforms", "Branded polos", "Company merch", "Reorder programs"], image: "/images/audience-business.png" },
  { tag: "03", title: "Schools & Teams", headline: "Spirit wear.\nDone right.", desc: "Spiritwear campaigns, team gear, coach polos, parent merch. We handle sizing, collection, and production so you can focus on the season.", cta: "Plan Your Program", href: "/schools-teams", examples: ["Spiritwear", "Team uniforms", "Fundraisers", "Staff gear"], image: "/images/audience-schools.png" },
];

const PROCESS = [
  { num: "01", title: "Tell us what you need", desc: "Item, quantity, placement, artwork. Even if you're not sure — that's fine." },
  { num: "02", title: "We recommend the method", desc: "Embroidery, print, heat transfer — we'll tell you what makes sense for your budget and timeline." },
  { num: "03", title: "Approve the proof", desc: "You see exactly what you're getting before we touch a single garment. No guessing." },
  { num: "04", title: "We make it. You pick it up.", desc: "Quality-checked, packed, and ready. Usually within 1–2 weeks depending on the project." },
];

const BRANDS = ["Nike","adidas","Champion","Carhartt","Bella+Canvas","Comfort Colors","New Era","Richardson","Under Armour","Gildan","Hanes","Port Authority","Next Level","Flexfit","Yupoong","Sport-Tek","District","American Apparel","Behind The Scenes"];

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Businesses", href: "/businesses" },
  { label: "Schools & Teams", href: "/schools-teams" },
  { label: "Individuals", href: "/individuals" },
  { label: "Our Story", href: "/our-story" },
  { label: "FAQ", href: "/faq" },
];

const C = {
  bg: "#F8F6F1", bgAlt: "#F0EDE6", white: "#FFFFFF",
  teal: "#123842", tealDark: "#0D2A32", tealLight: "#1A4E5C", tealMuted: "rgba(18,56,66,0.7)",
  cream: "#EFE3C7", text: "#1A1A1A", textMuted: "rgba(26,26,26,0.6)", textSubtle: "rgba(26,26,26,0.4)",
  border: "rgba(18,56,66,0.10)", borderStrong: "rgba(18,56,66,0.18)",
};

export default function HomePage() {
  const [hoveredAudience, setHoveredAudience] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Epilogue', system-ui, sans-serif" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(24px, 4vw, 64px)", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrollY > 60 ? "rgba(248,246,241,0.92)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(20px)" : "none",
        borderBottom: scrollY > 60 ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>
        <a href="/"><img src="/images/logo.svg" alt="Westfield Threads" style={{ height: 56 }} /></a>
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: C.textMuted, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.teal)} onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}
            >{l.label}</a>
          ))}
          <a href="/contact" className="cta-btn" style={{ padding: "12px 28px", fontSize: 11, marginLeft: 8 }}>Get a Quote</a>
        </div>
        <button className="mobile-toggle" onClick={() => setMobileNav(!mobileNav)} style={{ display: "none", alignItems: "center", justifyContent: "center", width: 44, height: 44, background: "none", border: "none", cursor: "pointer" }} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5">
            {mobileNav ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="17" x2="21" y2="17" /></>}
          </svg>
        </button>
      </nav>

      {mobileNav && (
        <div className="mobile-nav-overlay" style={{ background: "rgba(248,246,241,0.98)" }}>
          <button onClick={() => setMobileNav(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer" }} aria-label="Close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          {NAV_LINKS.map(l => (<a key={l.href} href={l.href} className="mobile-nav-link" style={{ color: C.teal, borderBottomColor: C.border }} onClick={() => setMobileNav(false)}>{l.label}</a>))}
          <a href="/contact" className="cta-btn" style={{ marginTop: 32, justifyContent: "center" }} onClick={() => setMobileNav(false)}>Get a Quote</a>
        </div>
      )}

      {/* HERO — teal background, not black */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 clamp(24px, 4vw, 64px) clamp(60px, 8vh, 120px)",
        position: "relative",
        overflow: "hidden",
        background: C.teal,
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1000 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32, animation: "fadeIn 1s ease 0.2s both" }}>
            <div style={{ width: 48, height: 1, background: C.cream, animation: "slideIn 0.8s ease 0.4s both", transformOrigin: "left" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(239,227,199,0.7)" }}>Custom Embroidery & Print — Westfield, New Jersey</span>
          </div>
          <h1 className="hero-title" style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#FFFFFF", animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}>
            Made thoughtfully<br />and built to{" "}<span style={{ color: C.cream, fontStyle: "italic", fontFamily: "'Epilogue', sans-serif", fontWeight: 300, textTransform: "none" }}>last.</span>
          </h1>
          <p style={{ marginTop: 28, maxWidth: 560, fontSize: 17, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", fontWeight: 400, animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}>
            Embroidery, screen printing, and heat transfer for people who care about how it looks and how it holds up. One piece or five hundred.
          </p>
          <div className="hero-ctas" style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s both" }}>
            <a href="/contact" className="cta-btn">Start a Project</a>
            <a href="/services" className="cta-outline" style={{ color: C.cream, borderColor: "rgba(239,227,199,0.3)" }}>See How It Works</a>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 32, right: "clamp(24px, 4vw, 64px)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, animation: "fadeIn 1s ease 1.2s both" }}>
          <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", writingMode: "vertical-lr" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(239,227,199,0.25), transparent)" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ borderBottom: `1px solid ${C.border}`, background: C.white }}>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="service-cell" style={{ padding: "44px clamp(20px, 3vw, 40px)", borderRight: i < 3 ? `1px solid ${C.border}` : "none", transition: "background 0.3s", cursor: "default" }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 16, color: C.teal, opacity: 0.5 }}>{s.icon}</span>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8, color: C.teal }}>{s.label}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.textMuted }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AUDIENCES — images visible */}
      {/* AUDIENCES — premium card design, no overlays, headline below image */}
      <section style={{ padding: "clamp(80px, 12vh, 160px) clamp(24px, 4vw, 64px)", background: C.bg }}>
        <Reveal>
          <div style={{ maxWidth: 600, marginBottom: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 32, height: 3, background: C.teal, borderRadius: 2 }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textSubtle }}>Who We Work With</span>
            </div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "-0.02em", color: C.teal }}>Different projects.<br />Same standard.</h2>
          </div>
        </Reveal>
        <div className="audience-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.tag} delay={i * 150}>
              <a
                href={a.href}
                onMouseEnter={() => setHoveredAudience(i)}
                onMouseLeave={() => setHoveredAudience(null)}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                  transform: hoveredAudience === i ? "translateY(-6px)" : "none",
                  boxShadow: hoveredAudience === i ? "0 24px 60px rgba(18,56,66,0.12)" : "0 4px 20px rgba(18,56,66,0.04)",
                }}
              >
                <div style={{ height: 260, overflow: "hidden", position: "relative", background: C.bgAlt }}>
                  <img
                    src={a.image}
                    alt={a.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                      transform: hoveredAudience === i ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    fontWeight: 700,
                    lineHeight: 1.05,
                    textTransform: "uppercase",
                    letterSpacing: "-0.01em",
                    color: hoveredAudience === i ? C.teal : C.text,
                    marginBottom: 16,
                    whiteSpace: "pre-line",
                    transition: "color 0.3s ease",
                  }}>{a.headline}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: C.textMuted, maxWidth: "38ch", marginBottom: 28 }}>{a.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                    {a.examples.map(ex => (
                      <span
                        key={ex}
                        style={{
                          padding: "6px 14px",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          border: `1px solid ${C.border}`,
                          color: C.tealMuted,
                          borderRadius: 2,
                          background: "rgba(18,56,66,0.06)",
                          transition: "all 0.2s ease",
                          ...(hoveredAudience === i ? { borderColor: C.teal, color: C.teal } : {}),
                        }}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: C.teal,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    opacity: hoveredAudience === i ? 1 : 0.6,
                    transition: "opacity 0.3s ease",
                  }}>
                    {a.cta} <span style={{ transition: "transform 0.25s ease", display: "inline-block", transform: hoveredAudience === i ? "translateX(4px)" : "none" }}>→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "clamp(80px, 12vh, 160px) clamp(24px, 4vw, 64px)", background: C.white, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <div className="process-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 64 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                  <div style={{ width: 32, height: 3, background: C.teal, borderRadius: 2 }} />
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textSubtle }}>How It Works</span>
                </div>
                <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "-0.02em", color: C.teal }}>Four steps.<br />No runaround.</h2>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: C.textMuted, paddingTop: 48, maxWidth: "52ch" }}>We make ordering custom work simple. You tell us what you need, we handle everything else. Quotes come back within 1–2 business days — not 1–2 weeks.</p>
            </div>
          </Reveal>
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            {PROCESS.map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div style={{ position: "relative", padding: "0 clamp(16px, 2vw, 32px)", borderLeft: i > 0 ? `1px solid ${C.border}` : "none" }}>
                  <span style={{ display: "block", fontFamily: "'Oswald', sans-serif", fontSize: 48, fontWeight: 300, color: C.borderStrong, lineHeight: 1, marginBottom: 20 }}>{step.num}</span>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 18, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: 10, color: C.teal }}>{step.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, color: C.textMuted }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section style={{ padding: "48px 0", background: C.bg, borderBottom: `1px solid ${C.border}`, overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: `linear-gradient(to right, ${C.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: `linear-gradient(to left, ${C.bg}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
        <p style={{ textAlign: "center", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.textSubtle, marginBottom: 24 }}>Brands We Carry</p>
        <div style={{ display: "flex", width: "max-content", animation: "marquee 50s linear infinite" }}>
          {[...BRANDS, ...BRANDS, ...BRANDS].map((name, i) => (
            <span key={`${name}-${i}`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 150, padding: "0 24px", height: 40, fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: name.length > 14 ? 12 : 14, letterSpacing: "0.06em", textTransform: name === "adidas" ? "lowercase" : "uppercase", color: C.textSubtle, whiteSpace: "nowrap", userSelect: "none" }}>{name}</span>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section style={{ padding: "clamp(60px, 8vh, 100px) clamp(24px, 4vw, 64px)", background: C.white }}>
        <Reveal>
          <div className="stats-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { stat: "In-house", label: "All embroidery stitched in our Westfield studio" },
              { stat: "1–2 days", label: "Quote turnaround — not \"we'll get back to you\"" },
              { stat: "Same result", label: "Every reorder. We save your setup permanently." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "40px clamp(20px, 3vw, 40px)", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 4 }}>
                <span style={{ display: "block", fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, textTransform: "uppercase", color: C.teal, marginBottom: 8 }}>{item.stat}</span>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.textMuted }}>{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(80px, 12vh, 160px) clamp(24px, 4vw, 64px)", background: C.teal, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-40%", right: "-15%", width: "60vw", height: "60vw", borderRadius: "50%", border: "1px solid rgba(239,227,199,0.06)", pointerEvents: "none" }} />
        <Reveal>
          <div className="cta-final-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 80, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.02, textTransform: "uppercase", letterSpacing: "-0.02em", color: C.cream }}>Tell us what<br />you need.</h2>
              <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.85, color: "rgba(239,227,199,0.7)", maxWidth: "50ch" }}>The item, the quantity, where you want the logo, and your deadline. Even if you&apos;re not sure on the details — reach out. We&apos;ll figure it out together.</p>
              <div style={{ marginTop: 40 }}><a href="/contact" className="cta-btn">Start a Project</a></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[{ label: "Email", value: "Hi@westfieldthreads.com", href: "mailto:Hi@westfieldthreads.com" }, { label: "Call", value: "(908) 543-4291", href: "tel:+19085434291" }].map(c => (
                <a key={c.label} href={c.href} className="contact-row-light" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", border: "1px solid rgba(239,227,199,0.15)", transition: "all 0.25s", textDecoration: "none", borderRadius: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(239,227,199,0.5)" }}>{c.label}</span>
                  <span style={{ fontSize: 16, fontWeight: 700, color: C.cream }}>{c.value}</span>
                </a>
              ))}
              <p style={{ fontSize: 13, color: "rgba(239,227,199,0.45)", marginTop: 4 }}>Quotes come back within 1–2 business days.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "64px clamp(24px, 4vw, 64px)", borderTop: `1px solid ${C.border}`, background: C.bg }}>
        <div className="footer-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 64 }}>
          <div>
            <img src="/images/logo.svg" alt="Westfield Threads" style={{ height: 24, marginBottom: 16, opacity: 0.7 }} />
            <p style={{ fontSize: 14, lineHeight: 1.75, color: C.textMuted, maxWidth: "36ch" }}>Custom embroidery, screen printing, and garment decoration. Westfield, New Jersey.</p>
          </div>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textSubtle, display: "block", marginBottom: 16 }}>Navigate</span>
            {NAV_LINKS.map(l => (<a key={l.href} href={l.href} className="footer-link-light" style={{ display: "block", fontSize: 14, color: C.textMuted, padding: "4px 0", transition: "color 0.2s", textDecoration: "none" }}>{l.label}</a>))}
          </div>
          <div>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.textSubtle, display: "block", marginBottom: 16 }}>Contact</span>
            <a href="mailto:Hi@westfieldthreads.com" className="footer-link-light" style={{ display: "block", fontSize: 14, color: C.textMuted, padding: "4px 0", textDecoration: "none", transition: "color 0.2s" }}>Hi@westfieldthreads.com</a>
            <a href="tel:+19085434291" className="footer-link-light" style={{ display: "block", fontSize: 14, color: C.textMuted, padding: "4px 0", textDecoration: "none", transition: "color 0.2s" }}>(908) 543-4291</a>
            <span style={{ display: "block", fontSize: 14, color: C.textSubtle, padding: "4px 0", marginTop: 8 }}>Westfield, NJ 07090</span>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 24, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: C.textSubtle }}>© 2026 Westfield Threads</span>
          <a href="https://instagram.com/westfieldthreads" target="_blank" rel="noopener noreferrer" className="footer-link-light" style={{ fontSize: 12, color: C.textSubtle, transition: "color 0.2s", textDecoration: "none" }}>Instagram →</a>
        </div>
      </footer>
    </div>
  );
}