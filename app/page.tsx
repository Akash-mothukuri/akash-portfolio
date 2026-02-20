import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-100">
            Akash Mothukuri
          </h1>

          <p className="mt-4 text-xl text-slate-300">
            Senior React Native Engineer
          </p>

          <p className="mt-6 max-w-3xl text-slate-400 leading-relaxed">
            I build production-grade mobile applications focused on transaction
            reliability, real-time synchronisation, and scalable performance.
            Experienced across fintech and consumer platforms supporting
            10,000+ concurrent users, 99.8% uptime, and 1M+ downloads.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/work"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500 transition"
            >
              View Work
            </Link>

            <Link
              href="/resume"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-900 transition"
            >
              Resume
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}