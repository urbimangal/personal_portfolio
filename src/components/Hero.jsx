export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 max-w-5xl mx-auto">

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
        Hi, I'm <span className="text-[var(--color-primary)]">Urbi Mangal</span>
      </h1>

      <p className="max-w-xl text-lg text-[var(--color-muted-foreground)] mb-10">
        B.Tech CSE student (2024–2028) focused on Data Structures & Algorithms and Web Development. I enjoy solving problems and building real-world projects.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-card)]"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
}