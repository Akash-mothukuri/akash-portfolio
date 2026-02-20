import Container from "@/components/Container";
import Link from "next/link";

export default function FintechPOSCaseStudy() {
  return (
    <main className="py-24">
      <Container>
        <div className="max-w-3xl">
          <Link href="/work" className="text-sm text-slate-400 hover:text-slate-200">
            ← Back to Work
          </Link>

          <h1 className="mt-6 text-3xl font-semibold text-slate-100">
            POS & Payments Platform (Fintech)
          </h1>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Built and optimised mobile transaction workflows focused on reliability in
            high-frequency POS environments, including consistent state synchronisation,
            safe retry handling and clear failure recovery paths.
          </p>

          <div className="mt-10 space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-slate-100">What I delivered</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
                <li>
                  Designed mobile transaction lifecycle handling for payment-style workflows
                  (processing → success/failure → recovery).
                </li>
                <li>
                  Implemented resilient retry logic to reduce inconsistent states during unstable
                  connectivity.
                </li>
                <li>
                  Integrated secure APIs and aligned client state transitions with backend contracts.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100">Engineering focus</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
                <li>State synchronisation between client and backend systems.</li>
                <li>Defensive validation to prevent invalid transitions and duplicate submissions.</li>
                <li>Performance discipline for high-frequency screens (memoisation + render control).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-100">Outcome</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
                <li>Improved payment-flow stability and reduced mismatched transaction states.</li>
                <li>Clearer failure handling and recovery improved usability under poor network conditions.</li>
                <li>Better responsiveness on transaction-critical screens.</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}