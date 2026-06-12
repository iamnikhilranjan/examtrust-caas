import { ShieldCheck } from "lucide-react";

export type CertificateState = {
  title: string;
  institute: string;
  course: string;
  issueDate: string;
  logoUrl: string;
  signatory: string;
  placeholders: string[];
};

export function CertificatePreview({ data }: { data: CertificateState }) {
  const issued = data.issueDate
    ? new Date(data.issueDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-6">
      <div
        className="absolute inset-0 -z-10 opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        className="relative w-full max-w-2xl rounded-md bg-[#f6efe1] px-12 py-14 text-[#1a1208] shadow-2xl"
        style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
      >
        {/* ornate border */}
        <div className="pointer-events-none absolute inset-3 rounded-sm border border-[#8a6a2a]/40" />
        <div className="pointer-events-none absolute inset-5 rounded-sm border border-[#8a6a2a]/20" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt="logo"
                className="h-12 w-12 rounded-full border border-[#8a6a2a]/30 object-cover"
                onError={(e) => ((e.currentTarget.style.display = "none"))}
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8a6a2a]/30 bg-[#ead9b3]">
                <ShieldCheck className="h-5 w-5 text-[#8a6a2a]" />
              </div>
            )}
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]">Issued by</p>
              <p className="font-display text-lg font-semibold">
                {data.institute || "Institute Name"}
              </p>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]">
            Verified On-Chain
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#8a6a2a]">Certificate</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-tight">
            {data.title || "Of Achievement"}
          </h1>
          <div className="mx-auto mt-4 h-px w-32 bg-[#8a6a2a]/40" />
          <p className="mt-8 text-sm">This is to certify that</p>
          <p className="mt-3 font-display text-3xl italic">
            <PlaceholderText value="{name}" />
          </p>
          <p className="mt-6 max-w-md mx-auto text-sm leading-relaxed">
            has successfully completed{" "}
            <span className="font-semibold">{data.course || "the prescribed course"}</span>{" "}
            with distinction and is hereby awarded this certificate of recognition.
          </p>
        </div>

        {data.placeholders.length > 0 && (
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {data.placeholders.slice(0, 6).map((p) => (
              <div key={p} className="rounded-sm border border-[#8a6a2a]/20 bg-[#ead9b3]/40 p-2">
                <p className="text-[9px] uppercase tracking-widest text-[#8a6a2a]">
                  {p.replace(/[{}]/g, "")}
                </p>
                <p className="font-display text-sm font-semibold">
                  <PlaceholderText value={p} />
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex items-end justify-between">
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]">Date</p>
            <p className="font-display text-base">{issued}</p>
          </div>
          <div className="text-right">
            <p className="font-display text-base italic">
              {data.signatory || "Authorized Signatory"}
            </p>
            <div className="ml-auto mt-1 h-px w-40 bg-[#8a6a2a]/60" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]">Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SAMPLES: Record<string, string> = {
  "{name}": "Aanya Sharma",
  "{roll_no}": "VA-2025-0142",
  "{marks}": "94 / 100",
  "{grade}": "A+",
  "{course}": "Advanced Solidity",
  "{workshop}": "ZK Proofs Bootcamp",
  "{date}": new Date().toLocaleDateString(),
};

function PlaceholderText({ value }: { value: string }) {
  const sample = SAMPLES[value.toLowerCase()] ?? SAMPLES[value] ?? value;
  return <span>{sample}</span>;
}
