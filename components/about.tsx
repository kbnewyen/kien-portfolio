export function About() {
  const skills = [
    "Product Strategy",
    "UX Research",
    "Roadmapping",
    "Figma",
    "React",
    "Fintech",
  ]

  return (
    <section id="about" className="py-40 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-tight">
              The work behind the work
            </h2>
            <p className="text-sm text-muted-foreground leading-[1.8]">
              {"PM with 8+ years primarily in fintech and automotive. Currently at Axos Bank. Previously eCapital and Mitchell International. I build with AI — this site was made with Claude, Cursor, and Vercel."}
            </p>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-y-3">
              {skills.map((skill, index) => (
                <span key={skill} className="text-sm text-muted-foreground">
                  {skill}
                  {index < skills.length - 1 && <span className="mx-3 text-accent">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
