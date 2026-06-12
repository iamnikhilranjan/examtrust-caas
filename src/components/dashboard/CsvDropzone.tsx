import { useState, useRef } from "react";
import { UploadCloud, FileText } from "lucide-react";

export type CsvData = { headers: string[]; rows: string[][]; fileName: string };

function parseCsv(text: string): { headers: string[]; rows: string[][] } {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return { headers: [], rows: [] };
  const split = (line: string) => {
    const out: string[] = [];
    let cur = "";
    let inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQ && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else inQ = !inQ;
      } else if (c === "," && !inQ) {
        out.push(cur);
        cur = "";
      } else cur += c;
    }
    out.push(cur);
    return out;
  };
  const headers = split(lines[0]);
  const rows = lines.slice(1).map(split);
  return { headers, rows };
}

export function CsvDropzone({ onParsed }: { onParsed: (data: CsvData) => void }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const { headers, rows } = parseCsv(String(reader.result ?? ""));
      onParsed({ headers, rows, fileName: file.name });
    };
    reader.readAsText(file);
  };

  return (
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
        if (f) handleFile(f);
      }}
      onClick={() => inputRef.current?.click()}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
        dragging
          ? "border-primary bg-primary/5"
          : "border-border bg-muted/20 hover:border-primary/60 hover:bg-muted/30"
      }`}
    >
      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground"
        style={{ background: "var(--gradient-primary)" }}
      >
        <UploadCloud className="h-7 w-7" />
      </div>
      <p className="font-medium">Drag & drop your CSV</p>
      <p className="mt-1 text-sm text-muted-foreground">
        or click to browse — first row should match your template placeholders
      </p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <FileText className="h-3 w-3" /> .csv up to 5MB
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".csv,text/csv"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
        }}
      />
    </div>
  );
}
