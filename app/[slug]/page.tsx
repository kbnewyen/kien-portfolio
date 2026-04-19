import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();
  return <CaseStudyLayout cs={cs} />;
}