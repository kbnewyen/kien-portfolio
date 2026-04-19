import Link from "next/link";
import { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyLayout({ cs }: { cs: CaseStudy }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141412", color: "#EDE8DC" }}>

      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <Link href="/" className="text-sm font-bold tracking-widest uppercase" style={{ color: "#EDE8DC" }}>
          Builtbykien
        </Link>
        <Link href="/#work" className="text-sm" style={{ color: "#5A5A50" }}>
          ← All work
        </Link>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-8 pt-16 pb-12">
        <div
          className="inline-block border px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ borderColor: "#E04D1C", color: "#E04D1C" }}
        >
          {cs.tag}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
          {cs.title}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "#5A5A50" }}>
          {cs.intro}{" "}
          <span className="font-bold" style={{ color: "#EDE8DC" }}>
            {cs.introHighlight}
          </span>{" "}
          {cs.introContinued}
        </p>
      </section>

      {/* METADATA BAR */}
      <section className="max-w-3xl mx-auto px-8 pb-12">
        <div
          className="grid grid-cols-2 md:grid-cols-4 border border-white/10"
          style={{ backgroundColor: "#1E1E1B" }}
        >
          {[
            { label: "Timeline", value: cs.metadata.timeline },
            { label: "Team", value: cs.metadata.team },
            { label: "Stakeholders", value: cs.metadata.stakeholders },
            { label: "Feature Type", value: cs.metadata.featureType },
          ].map((item, i) => (
            <div
              key={i}
              className="px-6 py-5 border-r border-b md:border-b-0 border-white/10 last:border-r-0"
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#5A5A50" }}>
                {item.label}
              </p>
              <p className="text-sm font-medium leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <div
          className="grid grid-cols-1 md:grid-cols-3 border border-white/10"
          style={{ backgroundColor: "#1E1E1B" }}
        >
          {cs.stats.map((item, i) => (
            <div
              key={i}
              className="px-8 py-10 border-r border-white/10 last:border-r-0"
            >
              <p className="text-5xl font-bold mb-3" style={{ color: "#E04D1C" }}>
                {item.value}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#5A5A50" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDY SECTIONS */}
      <section className="max-w-3xl mx-auto px-8 pb-20 space-y-16">
        {cs.sections.map((section) => (
          <div key={section.number} className="border-t border-white/10 pt-10">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-xs font-semibold tracking-widest" style={{ color: "#E04D1C" }}>
                {section.number}
              </span>
              <h2 className="text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "#5A5A50" }}>
              {section.body}
            </p>
          </div>
        ))}
      </section>

      {/* NEXT CASE STUDY */}
      <section className="border-t border-white/10">
        <Link
          href={`/work/${cs.next.slug}`}
          className="max-w-3xl mx-auto px-8 py-16 flex items-center justify-between group block"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#5A5A50" }}>
              Next Case Study
            </p>
            <p className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
              {cs.next.label}
            </p>
          </div>
          <span className="text-2xl" style={{ color: "#E04D1C" }}>→</span>
        </Link>
      </section>

    </div>
  );
}