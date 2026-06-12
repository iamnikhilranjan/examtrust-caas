import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ExternalLink } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockLedger, type LedgerRow } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/ledger")({
  component: LedgerPage,
});

function LedgerPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"all" | LedgerRow["status"]>("all");

  const rows = useMemo(() => {
    return mockLedger.filter((r) => {
      if (status !== "all" && r.status !== status) return false;
      if (!q) return true;
      const needle = q.toLowerCase();
      return (
        r.recipient.toLowerCase().includes(needle) ||
        r.course.toLowerCase().includes(needle) ||
        r.txHash.toLowerCase().includes(needle) ||
        r.id.toLowerCase().includes(needle)
      );
    });
  }, [q, status]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold">Credential Ledger</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Every credential your organization has issued, on-chain and searchable.
        </p>
      </div>

      <Card className="p-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by recipient, course, or tx hash…"
              className="pl-9"
            />
          </div>
          <Select value={status} onValueChange={(v) => setStatus(v as typeof status)}>
            <SelectTrigger className="sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="Minted">Minted</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Recipient</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Issued</TableHead>
                <TableHead>Tx Hash</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-medium">{r.recipient}</TableCell>
                  <TableCell className="text-muted-foreground">{r.course}</TableCell>
                  <TableCell className="text-muted-foreground">{r.issuedAt}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {r.txHash.slice(0, 10)}…{r.txHash.slice(-6)}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={r.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Link
                      to="/credential/$id"
                      params={{ id: r.id }}
                      className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="py-10 text-center text-sm text-muted-foreground">
                    No credentials match your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

function StatusBadge({ status }: { status: LedgerRow["status"] }) {
  if (status === "Minted")
    return (
      <Badge className="border-transparent bg-accent/20 text-accent hover:bg-accent/25">
        Minted
      </Badge>
    );
  if (status === "Pending")
    return (
      <Badge variant="outline" className="border-primary/40 text-primary">
        Pending
      </Badge>
    );
  return <Badge variant="destructive">Failed</Badge>;
}
