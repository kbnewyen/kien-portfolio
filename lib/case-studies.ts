export type PullQuote = {
    quote: string;
    attribution: string;
  };
  
  export type Section = {
    number: string;
    title: string;
    sectionTitle: string;
    body: string;
    pullQuote?: PullQuote;
    hasScreenshot?: boolean;
  };
  
  export type CaseStudy = {
    slug: string;
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
    sections: Section[];
    next: {
      slug: string;
      label: string;
    };
  };
  
  export const caseStudies: CaseStudy[] = [
    {
      slug: "ecapital-checkout",
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
          sectionTitle: "Placeholder section title",
          body: "Placeholder body text — add your overview content here.",
          hasScreenshot: true,
        },
        {
          number: "02",
          title: "Discovery",
          sectionTitle: "Placeholder section title",
          body: "Placeholder body text — add your discovery content here.",
          pullQuote: {
            quote: "Placeholder pull quote — add a key insight or stakeholder quote here.",
            attribution: "— Role, context",
          },
        },
        {
          number: "03",
          title: "Process",
          sectionTitle: "Placeholder section title",
          body: "Placeholder body text — add your process content here.",
          hasScreenshot: true,
        },
        {
          number: "04",
          title: "Solution",
          sectionTitle: "Placeholder section title",
          body: "Placeholder body text — add your solution content here.",
          hasScreenshot: true,
        },
        {
          number: "05",
          title: "Results",
          sectionTitle: "Placeholder section title",
          body: "Placeholder body text — add your results content here.",
        },
        {
          number: "06",
          title: "Learnings",
          sectionTitle: "Placeholder section title",
          body: "Placeholder body text — add your learnings content here.",
        },
      ],
      next: {
        slug: "payments",
        label: "Vendor Payments — eCapital",
      },
    },
    {
      slug: "payments",
      tag: "Case Study · eCapital",
      title: "Building a vendor payments product from zero",
      intro: "Placeholder intro.",
      introHighlight: "Placeholder highlight phrase",
      introContinued: "— placeholder continuation.",
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
        { number: "01", title: "Overview", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "02", title: "Discovery", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "03", title: "Process", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "04", title: "Solution", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "05", title: "Results", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "06", title: "Learnings", sectionTitle: "Placeholder", body: "Placeholder." },
      ],
      next: { slug: "mitchell", label: "Repair QA — Mitchell International" },
    },
    {
      slug: "mitchell",
      tag: "Case Study · Mitchell International",
      title: "A first-of-its-kind repair QA tool, shipped in 9 months",
      intro: "Placeholder intro.",
      introHighlight: "Placeholder highlight phrase",
      introContinued: "— placeholder continuation.",
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
        { number: "01", title: "Overview", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "02", title: "Discovery", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "03", title: "Process", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "04", title: "Solution", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "05", title: "Results", sectionTitle: "Placeholder", body: "Placeholder." },
        { number: "06", title: "Learnings", sectionTitle: "Placeholder", body: "Placeholder." },
      ],
      next: { slug: "ecapital-checkout", label: "Checkout — eCapital" },
    },
  ];
  
  export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
  }