"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyLayout({ cs }: { cs: CaseStudy }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (idx: number) => {
    sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141412", color: "#EDE8DC" }}>

      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 sticky top-0 z-50" style={{ backgroundColor: "#141412" }}>
        <Link href="/" className="text-sm font-bold tracking-widest uppercase" style={{ color: "#EDE8DC" }}>
          Builtbykien
        </Link>
        <Link href="/#work" className="text-sm" style={{ color: "#5A5A50" }}>
          ← All work
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-8 pt-16 pb-12">
        <div className="inline-block border px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ borderColor: "#E04D1C", color: "#E04D1C" }}>
          {cs.tag}
        </div>
        <h1 className="className=text-3xl md:text-4xl font-normal leading-tight mb-8">{cs.title}</h1>
        <p className="text-sm leading-relaxed font-light max-w-lg" style={{ color: "#5A5A50" }}>
          {cs.intro}{" "}
          <span className="font-bold" style={{ color: "#EDE8DC" }}>{cs.introHighlight}</span>{" "}
          {cs.introContinued}
        </p>
      </section>

      {/* METADATA BAR */}
      <section className="max-w-3xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10" >
          {[
            { label: "Timeline", value: cs.metadata.timeline },
            { label: "Team", value: cs.metadata.team },
            { label: "Stakeholders", value: cs.metadata.stakeholders },
            { label: "Feature Type", value: cs.metadata.featureType },
          ].map((item, i) => (
            <div key={i} className="px-6 py-5 border-r border-b md:border-b-0 border-white/10 last:border-r-0">
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#5A5A50" }}>{item.label}</p>
              <p className="text-sm font-medium leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <div
          className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-white/10"
          style={{ backgroundColor: "rgba(237,232,220,0.05)" }}
        >
          {cs.stats.map((item, i) => (
            <div key={i} className="px-8 py-10 border-r border-white/10 last:border-r-0">
              <p className="text-5xl font-bold mb-3" style={{ color: "#E04D1C" }}>{item.value}</p>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5A5A50" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BODY — sidebar + content */}
      <div className="relative max-w-5xl mx-auto px-8 pb-32">
        <div className="flex gap-16">

          {/* DESKTOP SIDE NAV */}
          <aside className="hidden md:block w-40 shrink-0 border-r border-white/10 relative">
            <div className="sticky top-24">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#5A5A50" }}>Sections</p>
              <ul className="space-y-3">
                {/* Progress bar */}
                <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: "rgba(237,232,220,0.1)" }}>
                  <div
                    className="w-full transition-all duration-300"
                    style={{
                      backgroundColor: "#1A6B5A",
                      height: `${((activeIndex + 1) / cs.sections.length) * 100}%`
                    }}
                  />
                </div>
                {cs.sections.map((section, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollToSection(i)}
                      className="flex items-center gap-3 text-left w-full group"
                    >
                      <span
                        className="w-0.5 h-5 rounded-full transition-colors duration-200 shrink-0"
                        style={{ backgroundColor: activeIndex === i ? "#E04D1C" : "transparent" }}
                      />
                      <span className="text-xs font-semibold tracking-widest" style={{ color: "#5A5A50" }}>
                        {section.number}
                      </span>
                      <span
                        className="text-sm transition-colors duration-200"
                        style={{ color: activeIndex === i ? "#EDE8DC" : "#5A5A50", fontWeight: activeIndex === i ? 600 : 400 }}
                      >
                        {section.title}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* SECTIONS */}
          <div className="flex-1 min-w-0 space-y-20">
            {cs.sections.map((section, i) => (
              <div
                key={i}
                ref={(el) => { sectionRefs.current[i] = el; }}
                className="scroll-mt-24"
              >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold tracking-widest" style={{ color: "1A6B5A" }}>
                    {section.number}
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#1A6B5A" }}>
                    — {section.title}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "#E04D1C", opacity: 0.2 }} />
                </div>

                {/* Section title */}
                <h2 className="text-xl md:text-2xl font-normal mb-6">{section.sectionTitle}</h2>

                {/* Body */}
                <p className="text-sm leading-relaxed font-light mb-8" style={{ color: "#5A5A50" }}>{section.body}</p>

                {/* Pull quote */}
                {section.pullQuote && (
                  <blockquote className="my-8 pl-5 border-l-2" style={{ borderColor: "#E04D1C" }}>
                    <p className="text-lg italic mb-2" style={{ color: "#EDE8DC" }}>"{section.pullQuote.quote}"</p>
                    <cite className="text-sm not-italic" style={{ color: "#5A5A50" }}>{section.pullQuote.attribution}</cite>
                  </blockquote>
                )}

                {/* Screenshot placeholder */}
                {section.hasScreenshot && (
                  <div className="mt-8 rounded border border-dashed border-white/20 flex items-center justify-center py-20"
                    style={{ backgroundColor: "#1E1E1B" }}>
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5A5A50" }}>
                      Screenshot Placeholder
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM DRAWER */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50" style={{ backgroundColor: "#1E1E1B" }}>
        {/* Drawer toggle */}
        <button
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="w-full flex items-center justify-between px-6 py-4 border-t border-white/10"
        >
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest" style={{ color: "#E04D1C" }}>
              {cs.sections[activeIndex].number}
            </span>
            <span className="text-sm font-semibold" style={{ color: "#EDE8DC" }}>
              {cs.sections[activeIndex].title}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Dot indicators */}
            <div className="flex gap-1">
              {cs.sections.map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                  style={{ backgroundColor: i === activeIndex ? "#E04D1C" : i < activeIndex ? "#5A5A50" : "#2A2A28" }}
                />
              ))}
            </div>
            <span className="text-xs" style={{ color: "#5A5A50" }}>{drawerOpen ? "↓" : "↑"}</span>
          </div>
        </button>

        {/* Expanded drawer */}
        {drawerOpen && (
          <div className="border-t border-white/10 px-6 py-4">
            <ul className="space-y-3">
              {cs.sections.map((section, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection(i)}
                    className="flex items-center gap-3 w-full text-left py-1"
                  >
                    <span className="text-xs font-semibold tracking-widest w-6" style={{ color: "#5A5A50" }}>
                      {section.number}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: i === activeIndex ? "#EDE8DC" : "#5A5A50", fontWeight: i === activeIndex ? 600 : 400 }}
                    >
                      {section.title}
                    </span>
                    {i === activeIndex && (
                      <span className="ml-auto text-xs" style={{ color: "#E04D1C" }}>✓</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* NEXT CASE STUDY */}
      <section className="border-t border-white/10">
        <Link href={`/${cs.next.slug}`}
          className="max-w-3xl mx-auto px-8 py-16 flex items-center justify-between group block">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#5A5A50" }}>
              Next Case Study
            </p>
            <p className="text-2xl font-bold group-hover:opacity-70 transition-opacity">{cs.next.label}</p>
          </div>
          <span className="text-2xl" style={{ color: "#E04D1C" }}>→</span>
        </Link>
      </section>

    </div>
  );
}