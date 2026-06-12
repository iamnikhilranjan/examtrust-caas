import { useState } from "react";
import { Plus, X, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Props = {
  value: string[];
  onChange: (next: string[]) => void;
};

export function PlaceholderChips({ value, onChange }: Props) {
  const [draft, setDraft] = useState("");

  const add = () => {
    const raw = draft.trim().replace(/[{}\s]/g, "");
    if (!raw) return;
    const tag = `{${raw}}`;
    if (value.includes(tag)) {
      toast.info("Placeholder already exists");
      return;
    }
    onChange([...value, tag]);
    setDraft("");
  };

  const remove = (tag: string) => onChange(value.filter((t) => t !== tag));

  const copy = (tag: string) => {
    navigator.clipboard?.writeText(tag);
    toast.success(`Copied ${tag}`);
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <Input
          placeholder="e.g. roll_no"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
          }}
        />
        <Button type="button" variant="secondary" onClick={add}>
          <Plus className="mr-1 h-4 w-4" /> Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {value.length === 0 && (
          <p className="text-xs text-muted-foreground">No placeholders yet.</p>
        )}
        {value.map((tag) => (
          <span
            key={tag}
            className="group inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono text-foreground"
          >
            <button
              type="button"
              onClick={() => copy(tag)}
              className="flex items-center gap-1 hover:text-accent"
              title="Copy to clipboard"
            >
              <Copy className="h-3 w-3 opacity-60" />
              {tag}
            </button>
            <button
              type="button"
              onClick={() => remove(tag)}
              className="ml-1 rounded-full p-0.5 text-muted-foreground hover:bg-destructive/20 hover:text-destructive"
              aria-label={`Remove ${tag}`}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
