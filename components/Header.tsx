"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Businesses", href: "/businesses" },
  { label: "Schools & Teams", href: "/schools-teams" },
  { label: "Individuals", href: "/individuals" },
  { label: "Our Story", href: "/our-story" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-page mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-black text-teal uppercase tracking-tight no-underline">
          Westfield Threads
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-semibold text-text-muted hover:text-teal transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="wl-btn-primary text-[12px] px-5 py-2.5">
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-teal"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-[14px] font-semibold text-text-muted hover:text-teal transition-colors no-underline py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="wl-btn-primary text-[12px] w-full text-center mt-3"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
