import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal text-cream">
      <div className="max-w-page mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-black uppercase tracking-tight text-cream mb-3">
              Westfield Threads
            </h3>
            <p className="text-[14px] text-cream/70 leading-relaxed">
              Custom embroidery, screen printing, and garment decoration in Westfield, New Jersey.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-[12px] font-black uppercase tracking-widest text-cream/50 mb-4">
              Explore
            </h4>
            <nav className="space-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "Businesses", href: "/businesses" },
                { label: "Schools & Teams", href: "/schools-teams" },
                { label: "Individuals", href: "/individuals" },
                { label: "Our Story", href: "/our-story" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[14px] text-cream/70 hover:text-cream transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-[12px] font-black uppercase tracking-widest text-cream/50 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-2 text-[14px]">
              <a href="tel:+19085434291" className="block text-cream/70 hover:text-cream transition-colors no-underline">
                (908) 543-4291
              </a>
              <a href="mailto:Hi@westfieldthreads.com" className="block text-cream/70 hover:text-cream transition-colors no-underline">
                Hi@westfieldthreads.com
              </a>
              <p className="text-cream/50 pt-1">Westfield, New Jersey</p>
            </div>
            <a
              href="https://www.instagram.com/westfieldthreads"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cream/50 hover:text-cream transition-colors no-underline text-[13px]"
            >
              Instagram →
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center text-[12px] text-cream/40">
          © {new Date().getFullYear()} Westfield Threads. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
