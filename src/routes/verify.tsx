import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  ScanLine,
  UploadCloud,
  FileText,
  X,
  Loader2,
  CheckCircle2,
  XCircle,
  Copy,
  ExternalLink,
  RotateCcw,
  QrCode,
} from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Verify a Credential — ExamTrust" },
      {
        name: "description",
        content:
          "Drop a credential PDF or paste an ID, URL, or transaction hash to instantly verify authenticity on-chain.",
      },
    ],
  }),
  component: VerifyPage,
});

type VerificationResult = {
  valid: boolean;
  credentialId: string;
  documentHash: string;
  txHash: string;
  mintedAt: string;
  issuer: string;
  issuerWallet: string;
  network: string;
  block: number;
  recipient: string;
  course: string;
  source: "pdf" | "id" | "url" | "hash";
  reason?: string;
};

function parseInput(raw: string): { id: string; source: "id" | "url" | "hash" } | null {
  const value = raw.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    const match = url.pathname.match(/\/credential\/([^/?#]+)/);
    if (match?.[1]) return { id: decodeURIComponent(match[1]), source: "url" };
  } catch {
    // not a URL
  }
  if (/^0x[a-f0-9]{40,}$/i.test(value)) return { id: value, source: "hash" };
  return { id: value, source: "id" };
}

async function sha256Hex(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Deterministic fake-but-stable mock so the demo feels real. Swap with API call later.
function mockLookup(
  key: string,
  source: VerificationResult["source"],
  documentHash?: string,
): VerificationResult {
  // Any input containing "fail" or "bad" → invalid; otherwise valid.
  const invalid = /fail|bad|tamper|invalid/i.test(key);
  const id = source === "pdf" ? `cred_${key.slice(0, 8)}` : key;
  const hash =
    documentHash ??
    (key.startsWith("0x")
      ? key.slice(2).padEnd(64, "0").slice(0, 64)
      : Array.from(key + "examtrust")
          .reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)
          .toString(16)
          .padEnd(64, "a")
          .slice(0, 64));
  const mintedAt = new Date(Date.now() - 1000 * 60 * 60 * 24 * 11).toISOString();
  return {
    valid: !invalid,
    credentialId: id,
    documentHash: hash,
    txHash:
      "0x" +
      Array.from(hash)
        .reverse()
        .join("")
        .padEnd(64, "f")
        .slice(0, 64),
    mintedAt,
    issuer: "ExamTrust Academy",
    issuerWallet: "0x7A91…F3B2",
    network: "Polygon Amoy",
    block: 8_421_577,
    recipient: "Aanya Sharma",
    course: "Advanced Solidity",
    source,
    reason: invalid ? "Document hash not found on the issuer's ledger" : undefined,
  };
}

function VerifyPage() {
  const [q, setQ] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileHash, setFileHash] = useState<string | null>(null);
  const [hashing, setHashing] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFile = async (f: File) => {
    if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
      toast.error("Please upload a PDF file");
      return;
    }
    if (f.size > 20 * 1024 * 1024) {
      toast.error("PDF must be smaller than 20MB");
      return;
    }
    setFile(f);
    setFileHash(null);
    setResult(null);
    setHashing(true);
    try {
      const hash = await sha256Hex(f);
      setFileHash(hash);
    } catch {
      toast.error("Could not read file");
      setFile(null);
    } finally {
      setHashing(false);
    }
  };

  const clearFile = () => {
    setFile(null);
    setFileHash(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const reset = () => {
    setResult(null);
    setQ("");
    clearFile();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    let res: VerificationResult;
    if (file && fileHash) {
      res = mockLookup(fileHash, "pdf", fileHash);
    } else {
      const parsed = parseInput(q);
      if (!parsed) {
        toast.error("Enter a credential ID, URL, or drop a PDF");
        return;
      }
      res = mockLookup(parsed.id, parsed.source);
    }
    setVerifying(true);
    // Simulate on-chain lookup latency
    setTimeout(() => {
      setVerifying(false);
      setResult(res);
    }, 750);
  };

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
            <span className="font-display text-lg font-semibold">ExamTrust</span>
          </Link>
          <Link
            to="/dashboard/templates"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card"
          >
            Open Dashboard <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </header>

        <main className="mx-auto max-w-2xl px-6 pb-24 pt-16">
          {!result ? (
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
                <ScanLine className="h-3 w-3 text-accent" /> Public verification portal
              </span>
              <h1 className="mx-auto mt-6 font-display text-5xl font-bold leading-tight">
                Verify any{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  credential
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground">
                Drop the credential PDF, or paste an ID, share URL, or transaction hash. We'll
                match it against the on-chain record — no login required.
              </p>

              <form onSubmit={submit} className="mt-10 space-y-4 text-left">
                {!file ? (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragging(false);
                      const f = e.dataTransfer.files?.[0];
                      if (f) void handleFile(f);
                    }}
                    onClick={() => inputRef.current?.click()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
                    }}
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
                      dragging
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card/30 hover:border-primary/60 hover:bg-card/50"
                    }`}
                  >
                    <div
                      className="mb-3 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <UploadCloud className="h-6 w-6" />
                    </div>
                    <p className="font-medium">Drag & drop a credential PDF</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      We'll hash it locally and check the ledger — your file never leaves your
                      browser.
                    </p>
                    <input
                      ref={inputRef}
                      type="file"
                      accept="application/pdf,.pdf"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) void handleFile(f);
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{file.name}</p>
                      <p className="truncate font-mono text-xs text-muted-foreground">
                        {hashing ? (
                          <span className="inline-flex items-center gap-1">
                            <Loader2 className="h-3 w-3 animate-spin" /> Hashing…
                          </span>
                        ) : (
                          <>SHA-256 · {fileHash?.slice(0, 24)}…</>
                        )}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={clearFile}
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/15 hover:text-destructive"
                      aria-label="Remove file"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}

                <div className="flex items-center gap-3 py-1">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    or
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      value={q}
                      onChange={(e) => setQ(e.target.value)}
                      placeholder="cred_1001, https://…/credential/…, or 0x9f3a…"
                      className="h-12 pl-9 font-mono text-sm"
                      maxLength={512}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={hashing || verifying}
                    className="h-12 px-6 font-semibold text-primary-foreground"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "var(--shadow-glow)",
                    }}
                  >
                    {verifying ? (
                      <>
                        <Loader2 className="mr-1 h-4 w-4 animate-spin" /> Verifying
                      </>
                    ) : (
                      <>
                        Verify <ArrowRight className="ml-1 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 w-12 shrink-0 p-0"
                    title="Scan QR Code"
                  >
                    <QrCode className="h-5 w-5" />
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center text-xs text-muted-foreground">
                Try{" "}
                <button
                  type="button"
                  onClick={() => setQ("cred_1001")}
                  className="font-mono text-accent hover:underline"
                >
                  cred_1001
                </button>{" "}
                for a valid sample, or{" "}
                <button
                  type="button"
                  onClick={() => setQ("cred_failed")}
                  className="font-mono text-destructive hover:underline"
                >
                  cred_failed
                </button>{" "}
                to see a failed check.
              </div>
            </div>
          ) : (
            <ResultPanel
              result={result}
              onReset={reset}
              onView={() =>
                navigate({ to: "/credential/$id", params: { id: result.credentialId } })
              }
            />
          )}
        </main>
      </div>
    </div>
  );
}

function ResultPanel({
  result,
  onReset,
  onView,
}: {
  result: VerificationResult;
  onReset: () => void;
  onView: () => void;
}) {
  const valid = result.valid;
  const minted = new Date(result.mintedAt);

  return (
    <div className="animate-fade-in space-y-5">
      {/* Hero badge */}
      <div className="flex flex-col items-center text-center">
        {valid ? (
          <div
            className="relative flex h-24 w-24 items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--success) 35%, transparent), transparent 70%), color-mix(in oklab, var(--success) 18%, transparent)",
              boxShadow: "var(--shadow-success)",
            }}
          >
            <span
              className="absolute inset-0 animate-ping rounded-full opacity-40"
              style={{ background: "color-mix(in oklab, var(--success) 35%, transparent)" }}
            />
            <CheckCircle2
              className="relative h-12 w-12"
              style={{ color: "var(--success)" }}
              strokeWidth={2.2}
            />
          </div>
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/15 ring-1 ring-destructive/40">
            <XCircle className="h-12 w-12 text-destructive" strokeWidth={2.2} />
          </div>
        )}

        <h1 className="mt-5 font-display text-4xl font-bold">
          {valid ? "Credential Verified" : "Verification Failed"}
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          {valid
            ? `This credential is authentic and was issued on-chain by ${result.issuer}.`
            : (result.reason ?? "We could not find a matching record on the ledger.")}
        </p>

        {valid && (
          <span
            className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              color: "var(--success)",
              background: "color-mix(in oklab, var(--success) 14%, transparent)",
              border: "1px solid color-mix(in oklab, var(--success) 30%, transparent)",
            }}
          >
            <ShieldCheck className="h-3 w-3" /> On-chain · {result.network}
          </span>
        )}
      </div>

      {/* Evaluation metadata */}
      <div
        className="overflow-hidden rounded-2xl border bg-card/40"
        style={{
          borderColor: valid
            ? "color-mix(in oklab, var(--success) 30%, transparent)"
            : "color-mix(in oklab, var(--destructive) 35%, transparent)",
        }}
      >
        <div className="grid gap-px bg-border/60 sm:grid-cols-2">
          <Field label="Issuer" value={result.issuer} mono={false} />
          <Field label="Issuer Wallet" value={result.issuerWallet} />
          <Field
            label="Minted"
            value={`${minted.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })} · ${minted.toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
            })}`}
            mono={false}
          />
          <Field label="Block" value={`#${result.block.toLocaleString()}`} />
          <Field label="Recipient" value={result.recipient} mono={false} />
          <Field label="Course" value={result.course} mono={false} />
        </div>

        <div className="border-t border-border/60 p-5">
          <HashRow label="Document SHA-256" value={result.documentHash} />
          <div className="mt-3">
            <HashRow label="Transaction Hash" value={result.txHash} explorer />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px border-t border-border/60 bg-border/60 text-xs">
          <Check label="Hash matches ledger" pass={valid} />
          <Check label="Issuer signature valid" pass={valid} />
          <Check label="Not revoked" pass={valid} />
          <Check
            label="Source"
            pass
            note={
              result.source === "pdf"
                ? "PDF upload"
                : result.source === "url"
                  ? "Share URL"
                  : result.source === "hash"
                    ? "Tx hash"
                    : "Credential ID"
            }
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {valid && (
          <Button
            onClick={onView}
            className="h-11 px-5 font-semibold text-primary-foreground"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            View full credential <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        )}
        <Button variant="outline" className="h-11" onClick={onReset}>
          <RotateCcw className="mr-1.5 h-4 w-4" /> Verify another
        </Button>
      </div>
    </div>
  );
}

function Field({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="bg-card/60 p-4">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className={`mt-1 truncate text-sm ${mono ? "font-mono" : "font-medium"}`}>{value}</p>
    </div>
  );
}

function HashRow({
  label,
  value,
  explorer,
}: {
  label: string;
  value: string;
  explorer?: boolean;
}) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Copy failed");
    }
  };
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2">
        <code className="flex-1 truncate font-mono text-xs">{value}</code>
        <button
          type="button"
          onClick={copy}
          className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Copy"
        >
          <Copy className="h-3.5 w-3.5" />
        </button>
        {explorer && (
          <a
            href="#"
            className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-accent"
            aria-label="View on explorer"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

function Check({ label, pass, note }: { label: string; pass: boolean; note?: string }) {
  return (
    <div className="flex items-center justify-between gap-2 bg-card/60 p-3">
      <span className="text-muted-foreground">{label}</span>
      <span
        className="inline-flex items-center gap-1 font-medium"
        style={{ color: pass ? "var(--success)" : "var(--destructive)" }}
      >
        {pass ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
        {note ?? (pass ? "Pass" : "Fail")}
      </span>
    </div>
  );
}
