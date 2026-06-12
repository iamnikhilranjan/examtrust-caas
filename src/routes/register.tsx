import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  component: RegisterOrganization,
});

function RegisterOrganization() {
  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Building2 className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Register Organization</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create an organization to start issuing verified certificates for your courses.
          </p>
        </div>

        <form className="space-y-6 bg-card p-6 border border-border rounded-xl shadow-sm">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName">Organization Name</Label>
              <Input id="orgName" placeholder="e.g. Veritas Academy" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website (Optional)</Label>
              <Input id="website" type="url" placeholder="https://" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input id="adminEmail" type="email" placeholder="admin@example.com" required />
            </div>
          </div>

          <Button type="submit" className="w-full" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            Register Organization
          </Button>
        </form>

        <div className="text-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
