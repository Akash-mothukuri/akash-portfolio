import Container from "@/components/Container";
import Link from "next/link";

export default function ReliableTransactionFlows() {
  return (
    <main className="py-24">
      <Container>
        <div className="max-w-3xl">
          <Link href="/blog" className="text-sm text-slate-400 hover:text-slate-200">
            ← Back to Blog
          </Link>

          <h1 className="mt-6 text-3xl font-semibold text-slate-100">
            Designing Reliable Transaction Flows in React Native
          </h1>

          <p className="mt-3 text-sm text-slate-400">20 Feb 2026</p>

          <p className="mt-6 text-slate-300 leading-relaxed">
            In transaction-heavy mobile flows, the hardest part is not the UI.
            It is maintaining consistent state when connectivity is unreliable and users
            move quickly through screens.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-100">
            Common failure modes
          </h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
            <li>Payment succeeds but the order update fails.</li>
            <li>User navigates away mid-request and the UI shows the wrong status.</li>
            <li>Duplicate taps create repeated submissions.</li>
            <li>Slow responses lead to unclear feedback and user retries.</li>
          </ul>

          <h2 className="mt-10 text-xl font-semibold text-slate-100">
            How I approach it
          </h2>

          <h3 className="mt-6 text-lg font-semibold text-slate-100">
            1) Model states explicitly
          </h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Even without a full state-machine library, I define clear states such as
            idle → processing → confirmed → failed. This keeps the UI consistent and makes
            transitions predictable.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-slate-100">
            2) Make retries safe
          </h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Retries must not create duplicates. I ensure in-flight requests are tracked,
            blocked from parallel submission, and reconciled with backend responses.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-slate-100">
            3) Keep UI aligned with backend contracts
          </h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            If the backend considers a payment pending, the UI should show pending with
            a safe recovery path, not pretend the user can restart the flow from scratch.
          </p>

          <h2 className="mt-10 text-xl font-semibold text-slate-100">
            Closing thought
          </h2>
          <p className="mt-3 text-slate-300 leading-relaxed">
            Reliability comes from state discipline, defensive handling, and honest UI feedback.
            That is what makes transaction flows feel trustworthy.
          </p>
        </div>
      </Container>
    </main>
  );
}