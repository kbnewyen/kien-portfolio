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
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-light text-chrome mb-8 leading-tight">
              The work behind the work
            </h2>
            <p className="text-sm text-muted-text leading-[1.8]">
              {"I'm a product manager with 8+ years shipping software. Currently at Axos Bank. Previously Mitchell International and eCapital. I'm transitioning into product design — this portfolio is part of that journey. I surf. I'm from San Diego."}
            </p>
          </div>
          
          <div className="flex flex-col justify-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {skills.map((skill, index) => (
                <li key={skill} className="flex items-center text-sm text-muted-text">
                  {index > 0 && <span className="mr-6 text-teal">·</span>}
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
