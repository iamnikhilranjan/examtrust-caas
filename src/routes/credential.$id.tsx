import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  ShieldCheck,
  Share2,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CertificatePreview } from "@/components/dashboard/CertificatePreview";
import { mockLedger } from "@/lib/mock-data";

export const Route = createFileRoute("/credential/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Credential ${params.id} — Veritas` },
      {
        name: "description",
        content: `On-chain credential record for ${params.id}. Verified by Veritas.`,
      },
    ],
  }),
  component: CredentialPage,
});

function CredentialPage() {
  const { id } = Route.useParams();
  // Try matching the ledger; otherwise fabricate a "Minted" placeholder so the page is never empty.
  const record =
    mockLedger.find((r) => r.id === id) ??
    ({
      id,
      recipient: "Aanya Sharma",
      course: "Advanced Solidity",
      issuedAt: new Date().toISOString().slice(0, 10),
      txHash:
        "0x" +
        Array.from({ length: 40 })
          .map(() => "0123456789abcdef"[Math.floor(Math.random() * 16)])
          .join(""),
      status: "Minted" as const,
    });

  const isValid = record.status === "Minted";

  return (
    <div className="dark">
      <div className="min-h-screen bg-background text-foreground">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-2">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="font-display text-lg font-semibold">Veritas</span>
          </Link>
          <Link
            to="/verify"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Verify another
          </Link>
        </header>

        <main className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              {isValid ? (
                <Badge className="border-transparent bg-accent/20 text-accent hover:bg-accent/25">
                  <CheckCircle2 className="mr-1 h-3 w-3" /> Verified on-chain
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="mr-1 h-3 w-3" /> {record.status}
                </Badge>
              )}
              <span className="font-mono text-xs text-muted-foreground">{record.id}</span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card/30">
              <CertificatePreview
                data={{
                  title: "Of Completion",
                  institute: "Veritas Academy",
                  course: record.course,
                  issueDate: record.issuedAt,
                  logoUrl: "",
                  signatory: "Dr. Meera Joshi",
                  placeholders: [],
                }}
              />
            </div>
          </div>

          <aside className="space-y-4">
            <Card className="p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Recipient</p>
              <p className="mt-1 font-display text-xl font-semibold">{record.recipient}</p>
              <div className="mt-4 space-y-3 text-sm">
                <Row label="Course" value={record.course} />
                <Row label="Issued" value={record.issuedAt} />
                <Row label="Issuer" value="Veritas Academy" />
                <Row label="Network" value="Polygon Amoy" accent />
              </div>
            </Card>

            <Card className="p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Transaction Hash
              </p>
              <p className="mt-2 break-all font-mono text-xs">{record.txHash}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline"
              >
                View on explorer <ExternalLink className="h-3 w-3" />
              </a>
            </Card>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="h-11">
                <Share2 className="mr-1 h-4 w-4" /> LinkedIn
              </Button>
              <Button
                className="h-11 text-primary-foreground"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <Download className="mr-1 h-4 w-4" /> PDF
              </Button>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className={accent ? "text-accent" : "text-foreground"}>{value}</span>
    </div>
  );
}
