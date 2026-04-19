export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-widest mb-3 text-[var(--color-primary)]">
        01. About Me
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Who am I?
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4 text-[var(--color-muted-foreground)] leading-relaxed">
          <p>
            Hey! I'm <strong className="text-white">Urbi Mangal</strong>, a B.Tech CSE student (2024–2028) passionate about problem-solving and building things from scratch.
          </p>
          <p>
            I enjoy working with <strong className="text-white">Data Structures and Algorithms</strong> and love bringing ideas to life through web development.
          </p>
          <p>
            I spend my time solving problems, building projects, and continuously learning new technologies.
          </p>
        </div>

        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-6 space-y-4">
          <h3 className="font-semibold text-lg mb-2">Quick Facts</h3>

          {[
            { icon: "🎓", label: "Degree", value: "B.Tech CSE (2024–2028)" },
            { icon: "📍", label: "Location", value: "India" },
            { icon: "💻", label: "Focus", value: "DSA + Web Development" },
            { icon: "🚀", label: "Currently", value: "Building projects" },
          ].map((fact) => (
            <div key={fact.label} className="flex gap-3 text-sm">
              <span>{fact.icon}</span>
              <div>
                <span className="text-[var(--color-muted-foreground)]">{fact.label}: </span>
                <span>{fact.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}