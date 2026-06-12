import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CsvDropzone, type CsvData } from "@/components/dashboard/CsvDropzone";
import { mockTemplates } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/issue")({
  component: IssuancePage,
});

const STAGES = ["Encrypting Data…", "Deploying to Ledger…", "Minting Complete"];

function IssuancePage() {
  const [templateId, setTemplateId] = useState(mockTemplates[0].id);
  const [csv, setCsv] = useState<CsvData | null>(null);
  const [stage, setStage] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const startMint = () => {
    if (!csv) return toast.error("Upload a CSV first");
    setDone(false);
    setStage(0);
    let i = 0;
    const tick = () => {
      i++;
      if (i < STAGES.length) {
        setStage(i);
        setTimeout(tick, 1100);
      } else {
        setStage(STAGES.length - 1);
        setDone(true);
        toast.success(`Minted ${csv.rows.length} credentials`);
      }
    };
    setTimeout(tick, 1100);
  };

  const progress = stage === null ? 0 : ((stage + 1) / STAGES.length) * 100;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-semibold">Batch Issuance</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick a template, upload your CSV, mint to the blockchain in one shot.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <Label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
            1. Select Template
          </Label>
          <Select value={templateId} onValueChange={setTemplateId}>
            <SelectTrigger className="max-w-md">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {mockTemplates.map((t) => (
                <SelectItem key={t.id} value={t.id}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-3 text-xs text-muted-foreground">
            Expected columns:{" "}
            <span className="font-mono text-foreground">
              {mockTemplates
                .find((t) => t.id === templateId)
                ?.placeholders.map((p) => p.replace(/[{}]/g, ""))
                .join(", ")}
            </span>
          </p>
        </Card>

        <Card className="p-6">
          <Label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
            2. Upload Recipient Data
          </Label>
          {!csv ? (
            <CsvDropzone onParsed={setCsv} />
          ) : (
            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm">
                  <span className="font-medium">{csv.fileName}</span> ·{" "}
                  <span className="text-muted-foreground">{csv.rows.length} rows</span>
                </p>
                <Button variant="ghost" size="sm" onClick={() => setCsv(null)}>
                  Replace file
                </Button>
              </div>
              <div className="max-h-80 overflow-auto rounded-md border border-border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {csv.headers.map((h) => (
                        <TableHead key={h}>{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {csv.rows.slice(0, 50).map((r, i) => (
                      <TableRow key={i}>
                        {r.map((c, j) => (
                          <TableCell key={j} className="font-mono text-xs">
                            {c}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <Label className="mb-3 block text-xs uppercase tracking-wider text-muted-foreground">
            3. Review & Mint
          </Label>
          {stage === null ? (
            <Button
              onClick={startMint}
              disabled={!csv}
              className="h-12 px-8 text-base font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Sparkles className="mr-2 h-5 w-5" /> Mint to Blockchain
            </Button>
          ) : (
            <div className="space-y-3">
              <Progress value={progress} />
              <div className="flex items-center gap-2 text-sm">
                {done ? (
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                ) : (
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                )}
                <span>{STAGES[stage]}</span>
              </div>
              {done && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setStage(null);
                    setCsv(null);
                    setDone(false);
                  }}
                >
                  Issue another batch
                </Button>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
