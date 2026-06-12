import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Rocket } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CertificatePreview,
  type CertificateState,
} from "@/components/dashboard/CertificatePreview";
import { PlaceholderChips } from "@/components/dashboard/PlaceholderChips";

export const Route = createFileRoute("/dashboard/templates")({
  component: TemplateBuilderPage,
});

const initial: CertificateState = {
  title: "Of Completion",
  institute: "Veritas Academy",
  course: "Advanced Solidity",
  issueDate: new Date().toISOString().slice(0, 10),
  logoUrl: "",
  signatory: "Dr. Meera Joshi",
  placeholders: ["{name}", "{roll_no}", "{marks}", "{grade}"],
};

function TemplateBuilderPage() {
  const [state, setState] = useState<CertificateState>(initial);

  const update = <K extends keyof CertificateState>(key: K, val: CertificateState[K]) =>
    setState((s) => ({ ...s, [key]: val }));

  const onSave = () => {
    // Hook point for your MERN API / smart contract deploy
    console.log("Save & Deploy template", state);
    toast.success("Template saved", {
      description: "Wire this button to your API + smart contract deploy.",
    });
  };

  return (
    <div className="grid h-[calc(100vh-3.5rem)] grid-cols-1 lg:grid-cols-[440px_1fr]">
      {/* Left: form */}
      <div className="overflow-y-auto border-r border-border bg-card/30 p-6">
        <div className="mb-6">
          <h1 className="font-display text-2xl font-semibold">Template Builder</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Design once. Mint thousands. Changes preview live on the right.
          </p>
        </div>

        <div className="space-y-5">
          <Field label="Template Title">
            <Input
              value={state.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Of Excellence"
            />
          </Field>

          <Field label="Institute Name">
            <Input
              value={state.institute}
              onChange={(e) => update("institute", e.target.value)}
              placeholder="Veritas Academy"
            />
          </Field>

          <Field label="Course Name">
            <Input
              value={state.course}
              onChange={(e) => update("course", e.target.value)}
              placeholder="Advanced Solidity"
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Issue Date">
              <Input
                type="date"
                value={state.issueDate}
                onChange={(e) => update("issueDate", e.target.value)}
              />
            </Field>
            <Field label="Logo URL">
              <Input
                value={state.logoUrl}
                onChange={(e) => update("logoUrl", e.target.value)}
                placeholder="https://…/logo.png"
              />
            </Field>
          </div>

          <Field label="Authorized Signatory">
            <Input
              value={state.signatory}
              onChange={(e) => update("signatory", e.target.value)}
              placeholder="Dr. Meera Joshi"
            />
          </Field>

          <Card className="space-y-3 border-border/60 bg-background/40 p-4">
            <div>
              <Label className="text-sm font-medium">Dynamic Placeholders</Label>
              <p className="text-xs text-muted-foreground">
                Add metadata tags your CSV columns will fill in.
              </p>
            </div>
            <PlaceholderChips
              value={state.placeholders}
              onChange={(next) => update("placeholders", next)}
            />
          </Card>

          <Button
            onClick={onSave}
            className="h-12 w-full text-base font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            <Rocket className="mr-2 h-5 w-5" /> Save & Deploy Template
          </Button>
        </div>
      </div>

      {/* Right: preview */}
      <div className="relative overflow-y-auto bg-background">
        <CertificatePreview data={state} />
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
