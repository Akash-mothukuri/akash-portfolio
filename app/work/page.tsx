import Container from "@/components/Container";
import Link from "next/link";

export default function Work() {
  return (
    <main className="py-24">
      <Container>
        <h1 className="text-3xl font-semibold text-slate-100">
          Selected Work
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Case studies focused on fintech payments, transaction reliability,
          performance optimisation, and scalable mobile systems.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/work/fintech-pos"
            className="rounded-xl border border-slate-800 p-6 hover:bg-slate-900 transition"
          >
            <div className="text-sm text-slate-400">Fintech</div>
            <div className="mt-2 text-lg font-semibold text-slate-100">
              POS & Payments Platform
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Transaction lifecycle, retry logic, state synchronisation and
              high-frequency payment handling.
            </p>
            <div className="mt-4 text-blue-400 text-sm">
              View Case Study →
            </div>
          </Link>

          <div className="rounded-xl border border-slate-800 p-6">
            <div className="text-sm text-slate-400">Consumer App</div>
            <div className="mt-2 text-lg font-semibold text-slate-100">
              Tropical Smoothie Cafe (1M+ Downloads)
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Performance optimisation, offline support and scalable real-time
              updates.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}