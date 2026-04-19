const skillGroups = [
  {
    category: "Languages",
    icon: "⚡",
    skills: ["C++", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    icon: "🧩",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    category: "DSA & Problem Solving",
    icon: "🧠",
    skills: [
      "Arrays & Strings",
      "Trees & Graphs",
      "Dynamic Programming",
      "Sorting & Searching",
      "Recursion",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git & GitHub", "VS Code", "LeetCode", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-ink text-cream">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
          02. Skills
        </p>

        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          What I work with
        </h2>

        <p className="text-cream/60 mb-12 max-w-lg">
          A mix of programming fundamentals and modern web technologies that I
          use to build and solve problems.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-white/10 rounded-2xl p-6 
              transition-all duration-300 
              hover:-translate-y-2 hover:scale-[1.02] 
              hover:border-accent/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] 
              group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-lg group-hover:text-accent transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full 
                    bg-white/5 border border-white/10 text-cream/80 
                    transition-all duration-300 cursor-default
                    hover:-translate-y-1 hover:scale-105
                    hover:bg-accent/20 hover:border-accent/40 hover:text-accent
                    hover:shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}