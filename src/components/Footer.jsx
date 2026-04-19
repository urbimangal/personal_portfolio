export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-sm text-[var(--color-muted-foreground)]">
      © {year} Urbi Mangal
    </footer>
  );
}