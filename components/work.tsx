"use client"

import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    number: "01",
    company: "Mitchell International",
    description: "Launched a patented 0→1 product with GM. Captured significant U.S. market share in under 9 months.",
    tags: ["0→1", "Automotive", "Patent"],
  },
  {
    number: "02",
    company: "eCapital Checkout",
    description: "Redesigned the checkout flow, enabling 1-hour funding and improving conversion.",
    tags: ["Conversion", "Fintech", "0→1"],
  },
  {
    number: "03",
    company: "eCapital Third-Party Payments",
    description: "Built a third-party payments product from scratch, processing substantial transaction volume.",
    tags: ["0→1", "Payments", "Fintech"],
  },
]

export function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          {caseStudies.map((study) => (
            <article
              key={study.number}
              className="group bg-card p-6 md:p-8 cursor-pointer transition-all duration-300 hover:translate-y-[-2px] border-l-[0.5px] border-transparent hover:border-accent"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <span className="text-sm font-light text-accent tracking-wide shrink-0 w-12">
                  {study.number}
                </span>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-light text-foreground mb-2">
                    {study.company}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 border border-accent/50 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
