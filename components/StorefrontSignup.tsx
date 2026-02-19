"use client";

import { useState, FormEvent } from "react";

export default function StorefrontSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xlgwdlpd", {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-cream/[.08] rounded-[22px] p-10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-cream/[.15] backdrop-blur-[10px] max-w-[460px] lg:justify-self-end">
      <h3 className="font-display text-[26px] font-black uppercase text-white mb-2.5">
        Get notified
      </h3>
      <p className="text-white/80 text-[15px] leading-relaxed mb-5">
        We&apos;ll send you an email when we open. That&apos;s it.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-2.5 items-stretch mb-3.5">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          aria-label="Email address"
          className="flex-1 px-3.5 py-3.5 rounded-xl border border-cream/20 bg-cream/10 font-body text-sm text-white placeholder:text-white/80 outline-none transition-all duration-150 focus:border-cream/55 focus:bg-cream/15 focus:ring-4 focus:ring-cream/10 backdrop-blur-sm"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-4 py-3.5 rounded-xl bg-cream text-teal font-body font-black tracking-[0.08em] uppercase text-xs cursor-pointer transition-all duration-150 whitespace-nowrap shadow-[0_12px_26px_rgba(0,0,0,0.15)] hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.20)] disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Sign Up"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-cream/90 text-sm text-center font-semibold">
          You&apos;re on the list!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-300/90 text-sm text-center font-semibold">
          Something went wrong. Try again?
        </p>
      )}
      {status === "idle" && (
        <p className="text-white/70 text-xs text-center font-semibold">
          No spam. We promise.
        </p>
      )}
    </div>
  );
}
