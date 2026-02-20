import Container from "./Container";
import Link from "next/link";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-slate-100 font-semibold tracking-tight">
            Akash<span className="text-blue-500">.</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-100 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}