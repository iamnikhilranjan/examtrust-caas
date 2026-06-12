import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "../hooks/use-auth";

export const Route = createFileRoute("/login")({
  component: LoginOrganization,
});

function LoginOrganization() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate({ to: "/" });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
            <Key className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Organization Sign In</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your dashboard and issue certificates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 border border-border rounded-xl shadow-sm">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="adminEmail">Admin Email</Label>
              <Input id="adminEmail" type="email" placeholder="admin@example.com" defaultValue="demo@examtrust.com" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <span className="text-xs text-primary hover:underline cursor-pointer">Forgot password?</span>
              </div>
              <Input id="password" type="password" defaultValue="password123" required />
            </div>
          </div>

          <Button type="submit" className="w-full" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            Sign In
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Not registered yet?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">
              Register Organization
            </Link>
          </p>
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
