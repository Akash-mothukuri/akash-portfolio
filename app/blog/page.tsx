import Container from "@/components/Container";
import Link from "next/link";

const posts = [
  {
    slug: "reliable-transaction-flows",
    title: "Designing Reliable Transaction Flows in React Native",
    date: "20 Feb 2026",
    summary:
      "How I approach retry handling, state synchronisation, and resilient UX for payment-style workflows.",
  },
];

export default function Blog() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl font-semibold text-slate-100">Blog</h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Notes on reliability, performance, and real-world mobile engineering.
        </p>

        <div className="mt-12 grid gap-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-xl border border-slate-800 p-6 hover:bg-slate-900 transition"
            >
              <div className="text-sm text-slate-400">{p.date}</div>
              <div className="mt-2 text-lg font-semibold text-slate-100">
                {p.title}
              </div>
              <p className="mt-2 text-sm text-slate-400">{p.summary}</p>
              <div className="mt-4 text-blue-400 text-sm">Read →</div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}