import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-background)] border-b border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-[var(--color-primary)]">
          Urbi.dev
        </h1>

        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}