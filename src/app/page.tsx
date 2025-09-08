import Reveal from "@/components/Reveal";
import SignupForm from "@/components/SignupForm";
import HoverCard from "@/components/HoverCard";

export default function Home() {
  return (
    <div className="font-sans" suppressHydrationWarning>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-center">
          <div className="grid gap-5">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-extrabold">
              <span className="bg-gradient-to-tr from-violet-600 to-cyan-400 bg-clip-text text-transparent">Numaeon</span>
              <br />
              AI, refined for humans
            </h1>
            <p className="text-foreground/70 text-lg">
              Build, experiment, and ship AI features faster with a lean, extensible stack.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <HoverCard className="rounded-md inline-block" scale={1.04} glowSize={420}>
                <a href="#cta" className="h-11 px-5 inline-flex items-center rounded-md text-white bg-gradient-to-tr from-violet-600 to-cyan-500 hover:brightness-110 transition">
                  Get started
                </a>
              </HoverCard>
              <HoverCard className="rounded-md inline-block" scale={1.04} glowSize={420} disableTilt>
                <a href="#" className="h-11 px-5 inline-flex items-center rounded-md border border-black/10 dark:border-white/15 hover:bg-foreground/5 transition">
                  View on GitHub
                </a>
              </HoverCard>
            </div>
            <ul className="flex items-center gap-4 text-foreground/60">
              <li>⚡ Fast</li>
              <li>🔒 Private</li>
              <li>🧩 Extensible</li>
            </ul>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] bg-gradient-to-b from-foreground/5 to-transparent">
              <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full blur-2xl opacity-70 bg-[radial-gradient(circle_at_30%_30%,#7C3AED,transparent_65%)]" />
              <div className="absolute -right-10 top-4 h-56 w-56 rounded-full blur-2xl opacity-70 bg-[radial-gradient(circle_at_40%_40%,#06B6D4,transparent_65%)]" />
              <div className="absolute left-1/3 -bottom-8 h-64 w-64 rounded-full blur-2xl opacity-50 bg-[radial-gradient(circle_at_40%_40%,#10B981,transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-cyan-400/10 backdrop-blur" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <HoverCard as="article" className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60">
                <h3 className="font-semibold mb-1">Natural UX</h3>
                <p className="text-foreground/70">Conversational interfaces with latency‑aware streaming.</p>
              </HoverCard>
            </Reveal>
            <Reveal>
              <HoverCard as="article" className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60">
                <h3 className="font-semibold mb-1">Tooling</h3>
                <p className="text-foreground/70">Plug in retrieval, function calling, and agents.</p>
              </HoverCard>
            </Reveal>
            <Reveal>
              <HoverCard as="article" className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60">
                <h3 className="font-semibold mb-1">Ship with Confidence</h3>
                <p className="text-foreground/70">Telemetry, eval hooks, and safety guardrails.</p>
              </HoverCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 bg-foreground/[.035]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center">How it works</h2>
          <ol className="mt-6 grid gap-3 max-w-3xl mx-auto">
            <Reveal>
              <HoverCard as="li" className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background/60" scale={1.02} glowSize={380}>
                <strong className="font-semibold">Connect</strong>
                <div className="text-foreground/70">Point to your data sources and tools.</div>
              </HoverCard>
            </Reveal>
            <Reveal>
              <HoverCard as="li" className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background/60" scale={1.02} glowSize={380}>
                <strong className="font-semibold">Compose</strong>
                <div className="text-foreground/70">Design your flows and prompts.</div>
              </HoverCard>
            </Reveal>
            <Reveal>
              <HoverCard as="li" className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-background/60" scale={1.02} glowSize={380}>
                <strong className="font-semibold">Deploy</strong>
                <div className="text-foreground/70">Go live with one command.</div>
              </HoverCard>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center">Use cases</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Assistants",
              "Search & RAG",
              "Automation",
              "Analytics",
              "Support",
              "Creative",
            ].map((label) => (
              <HoverCard
                key={label}
                as="span"
                className="text-center rounded-full border border-black/10 dark:border-white/10 bg-background/60 px-3 py-2 inline-block"
                scale={1.04}
                glowSize={280}
                disableTilt
              >
                {label}
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to try Numaeon?</h2>
          <p className="text-foreground/70 mt-1">Drop your email and we’ll reach out with updates.</p>
          <div className="mt-4">
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm">
          <small>© {new Date().getFullYear()} Numaeon</small>
          <a href="#" className="text-foreground/60 hover:text-foreground">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
