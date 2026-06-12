import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Zap, LogOut } from "lucide-react";
import { useAuth } from "../hooks/use-auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ExamTrust — Decentralized Credentialing" },
      {
        name: "description",
        content: "Issue tamper-proof, on-chain credentials in minutes. Zero code required.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-semibold">ExamTrust</span>
          </div>
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link
                to="/dashboard/templates"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card"
              >
                Open Dashboard <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card"
            >
              Sign In
            </Link>
          )}
        </header>

        <main className="mx-auto max-w-5xl px-6 pb-24 pt-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-accent" /> Gasless minting on Layer-2
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl">
            Decentralized credentialing,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              zero code required
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Design certificate templates, batch-mint to the blockchain, and let anyone verify
            authenticity in one click.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {isLoggedIn ? (
              <Link
                to="/dashboard/templates"
                className="inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                Start Issuing <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium hover:bg-card"
                >
                  Register Organization
                </Link>
              </>
            )}
            <Link
              to="/verify"
              className="inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium hover:bg-card"
            >
              Verify a Credential
            </Link>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Zap, title: "Gasless Minting", body: "Layer-2 settlement, sponsored fees." },
              { icon: ShieldCheck, title: "Tamper-Proof", body: "Cryptographic hashes on-chain." },
              { icon: Sparkles, title: "Instant Verify", body: "Public portal, no login needed." },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card/40 p-5 text-left"
              >
                <f.icon className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-lg font-semibold">{f.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
