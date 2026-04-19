import type { ReactNode } from "react";
import Link from "next/link";

const metadataBar: { label: string; value: ReactNode }[] = [
  { label: "Timeline", value: "Q2 – Q3 2023" },
  { label: "Team", value: "Team of 4" },
  {
    label: "Stakeholders",
    value: (
      <span className="flex flex-wrap gap-1.5">
        {["Engineering", "Ops", "Finance", "Executive"].map((role) => (
          <span
            key={role}
            className="inline-block rounded border border-white/10 bg-white/[0.04] px-2 py-1 text-xs font-medium leading-tight text-[#EDE8DC] md:text-sm"
          >
            {role}
          </span>
        ))}
      </span>
    ),
  },
  { label: "Feature Type", value: "0→1 + Redesign" },
];

export default function EcapitalCheckout() {
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

        {/* Tag */}
        <div className="inline-block border px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ borderColor: "#E04D1C", color: "#E04D1C" }}>
          Case Study · eCapital
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: "#EDE8DC" }}>
          How a checkout audit unlocked $2M in new revenue
        </h1>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed" style={{ color: "#5A5A50" }}>
          Small business owners live and die by cash flow. The product I managed was how they
          accessed it. When competitors started offering 1-hour funding and leadership set the
          mandate to match them, I went looking for what it would take.{" "}
          <span className="font-bold" style={{ color: "#EDE8DC" }}>
            What I found was bigger than the original brief
          </span>{" "}
          — a checkout experience quietly killing conversions, and a manual process leaking
          $300K in revenue every year that nobody had caught.
        </p>
      </section>

      {/* METADATA BAR */}
      <section className="max-w-3xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10"
          style={{ backgroundColor: "#1E1E1B" }}>

          {metadataBar.map((item, i) => (
            <div
              key={i}
              className="min-w-0 px-6 py-5 border-r border-b md:border-b-0 border-white/10 last:border-r-0"
            >
              <p className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#5A5A50" }}>
                {item.label}
              </p>
              <div className="text-sm font-medium leading-snug text-[#EDE8DC]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-3xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10"
          style={{ backgroundColor: "#1E1E1B" }}>

          {[
            { stat: "$2M+", label: "Additional Annual Revenue" },
            { stat: "58%", label: "Expedited Funding Conversion Lift" },
            { stat: "90%+", label: "Fee Revenue Capture Rate" },
          ].map((item, i) => (
            <div
              key={i}
              className="px-8 py-10 border-r border-white/10 last:border-r-0"
            >
              <p className="text-5xl font-bold mb-3" style={{ color: "#E04D1C" }}>
                {item.stat}
              </p>
              <p className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "#5A5A50" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}