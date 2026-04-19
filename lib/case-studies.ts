export type CaseStudy = {
  slug: string;
  /** Homepage #work card */
  listing: {
    number: string;
    company: string;
    description: string;
    tags: string[];
  };
  tag: string;
  title: string;
  intro: string;
  introHighlight: string;
  introContinued: string;
  metadata: {
    timeline: string;
    team: string;
    stakeholders: string;
    featureType: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
  sections: {
    number: string;
    title: string;
    body: string;
  }[];
  next: {
    slug: string;
    label: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "checkout",
    listing: {
      number: "01",
      company: "Checkout - eCapital",
      description:
        "Redesigned the checkout flow. Delivered $1M+ in new ARR and cut time-to-funding to 1 hour.",
      tags: ["Conversion", "Fintech", "0→1"],
    },
    tag: "Case Study · eCapital",
    title: "How a checkout audit unlocked $2M in new revenue",
    intro:
      "Small business owners live and die by cash flow. The product I managed was how they accessed it. When competitors started offering 1-hour funding and leadership set the mandate to match them, I went looking for what it would take.",
    introHighlight: "What I found was bigger than the original brief",
    introContinued:
      "— a checkout experience quietly killing conversions, and a manual process leaking $300K in revenue every year that nobody had caught.",
    metadata: {
      timeline: "Q2 – Q3 2023",
      team: "Team of 4",
      stakeholders: "Engineering · Ops · Finance · Executive",
      featureType: "0→1 + Redesign",
    },
    stats: [
      { value: "$2M+", label: "Additional Annual Revenue" },
      { value: "58%", label: "Expedited Funding Conversion Lift" },
      { value: "90%+", label: "Fee Revenue Capture Rate" },
    ],
    sections: [
      {
        number: "01",
        title: "Overview",
        body: "Placeholder — add your overview content here.",
      },
      {
        number: "02",
        title: "Discovery",
        body: "Placeholder — add your discovery content here.",
      },
      {
        number: "03",
        title: "Process",
        body: "Placeholder — add your process content here.",
      },
      {
        number: "04",
        title: "Solution",
        body: "Placeholder — add your solution content here.",
      },
      {
        number: "05",
        title: "Results",
        body: "Placeholder — add your results content here.",
      },
      {
        number: "06",
        title: "Learnings",
        body: "Placeholder — add your learnings content here.",
      },
    ],
    next: {
      slug: "payments",
      label: "Vendor Payments — eCapital",
    },
  },
  {
    slug: "payments",
    listing: {
      number: "02",
      company: "Vendor Payments - eCapital",
      description:
        "Built a vendor payments product from 0→1. Processed $24M+ across 5,000+ transactions in the US and Canada within the first 6 months.",
      tags: ["0→1", "Payments", "Fintech"],
    },
    tag: "Case Study · eCapital",
    title: "Building a vendor payments product from zero",
    intro: "Placeholder intro — add your opening context here.",
    introHighlight: "Placeholder highlight phrase",
    introContinued: "— placeholder continuation of the intro.",
    metadata: {
      timeline: "Q1 – Q3 2023",
      team: "Team of 5",
      stakeholders: "Engineering · Finance · Executive",
      featureType: "0→1",
    },
    stats: [
      { value: "$24M+", label: "Transactions Processed" },
      { value: "5,000+", label: "Transactions in First 6 Months" },
      { value: "2", label: "Markets — US & Canada" },
    ],
    sections: [
      { number: "01", title: "Overview", body: "Placeholder." },
      { number: "02", title: "Discovery", body: "Placeholder." },
      { number: "03", title: "Process", body: "Placeholder." },
      { number: "04", title: "Solution", body: "Placeholder." },
      { number: "05", title: "Results", body: "Placeholder." },
      { number: "06", title: "Learnings", body: "Placeholder." },
    ],
    next: {
      slug: "mitchell",
      label: "Repair QA — Mitchell International",
    },
  },
  {
    slug: "mitchell",
    listing: {
      number: "03",
      company: "Repair QA - Mitchell International",
      description:
        "First-of-its-kind repair workflow tool. Named inventor on the patent. Launched in 9 months — GM signed on as the first partner.",
      tags: ["0→1", "Automotive", "Patent"],
    },
    tag: "Case Study · Mitchell International",
    title: "A first-of-its-kind repair QA tool, shipped in 9 months",
    intro: "Placeholder intro — add your opening context here.",
    introHighlight: "Placeholder highlight phrase",
    introContinued: "— placeholder continuation of the intro.",
    metadata: {
      timeline: "Q1 – Q4 2022",
      team: "Team of 6",
      stakeholders: "Engineering · Operations · Executive · GM",
      featureType: "0→1",
    },
    stats: [
      { value: "17%", label: "US Market Share via GM Partnership" },
      { value: "9mo", label: "From Brief to Launch" },
      { value: "1", label: "US Patent Named Inventor" },
    ],
    sections: [
      { number: "01", title: "Overview", body: "Placeholder." },
      { number: "02", title: "Discovery", body: "Placeholder." },
      { number: "03", title: "Process", body: "Placeholder." },
      { number: "04", title: "Solution", body: "Placeholder." },
      { number: "05", title: "Results", body: "Placeholder." },
      { number: "06", title: "Learnings", body: "Placeholder." },
    ],
    next: {
      slug: "checkout",
      label: "Checkout — eCapital",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
