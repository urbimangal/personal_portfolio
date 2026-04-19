const projects = [
  {
    title: "Developer Portfolio Builder",
    description: "A tool to generate developer portfolios easily.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/urbimangal/Developer-Portfolio-Builder"
  },
  {
    title: "Project Idea Generator",
    description: "Suggests project ideas based on skills.",
    techStack: ["React", "API"],
    github: "https://github.com/urbimangal/project-idea-generator"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-[var(--color-card)] p-6 rounded-xl border border-[var(--color-border)] hover:-translate-y-1 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
              {p.title}
            </h3>

            <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
              {p.description}
            </p>

            <div className="flex gap-2 flex-wrap mb-4">
              {p.techStack.map((t) => (
                <span key={t} className="text-xs border px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--color-primary)] hover:underline"
              >
                GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}