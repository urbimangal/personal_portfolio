import { useState } from "react";

const socialLinks = [
  { label: "GitHub", url: "https://github.com/urbimangal", icon: "🐙" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/urbi-mangal-672828324", icon: "💼" },
  { label: "LeetCode", url: "https://leetcode.com/u/urbi_mangal/", icon: "🏆" },
  { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/urbimatth3", icon: "🟢" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "urbimangal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-widest mb-3 text-[var(--color-primary)]">
        04. Contact
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Get in touch
      </h2>

      <p className="text-[var(--color-muted-foreground)] max-w-md mb-10 leading-relaxed">
        Whether it's about a project, collaboration, or just a hello — feel free to reach out anytime.
      </p>

      <div className="flex flex-col items-start gap-6">
        
        <button
          onClick={handleCopyEmail}
          className="px-5 py-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-sm font-medium hover:border-[var(--color-primary)] transition-all"
        >
          {copied ? "✅ Copied!" : "📧 " + email}
        </button>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] text-sm text-[var(--color-muted-foreground)] hover:text-white hover:border-[var(--color-primary)] transition-all"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}