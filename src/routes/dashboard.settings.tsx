import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, KeyRound } from "lucide-react";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your organization's profile, API keys, and blockchain wallet settings.
        </p>
      </div>

      <div className="grid gap-8">
        {/* Profile Section */}
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="border-b bg-muted/40 px-6 py-4 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Organization Profile</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" defaultValue="ExamTrust Academy" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" defaultValue="admin@examtrust.com" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="website">Website URL</Label>
                <Input id="website" defaultValue="https://academy.examtrust.com" />
              </div>
            </div>
            <Button style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
              Save Changes
            </Button>
          </div>
        </div>

        {/* API Keys Section */}
        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <div className="border-b bg-muted/40 px-6 py-4 flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">API & Webhooks</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <Label>Production API Key</Label>
              <div className="flex gap-2">
                <Input type="password" value="sk_live_examtrust_8f92j3n4k2b4..." readOnly />
                <Button variant="outline">Copy</Button>
                <Button variant="secondary">Regenerate</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Keep this key secret. It provides full access to your organization's issuance capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
