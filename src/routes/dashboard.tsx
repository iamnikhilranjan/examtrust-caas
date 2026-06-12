import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { OrgProfileDropdown } from "@/components/dashboard/OrgProfileDropdown";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Org Dashboard — ExamTrust" },
      { name: "description", content: "Design templates, batch-issue credentials, and audit your ledger." },
    ],
  }),
  component: DashboardLayout,
});

function DashboardLayout() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      // keep dark on dashboard; do not strip globally
    };
  }, []);

  return (
    <div className="dark">
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background text-foreground">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
              <SidebarTrigger />
              <div className="flex-1" />
              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-muted-foreground sm:inline">
                  Connected to <span className="text-accent">Polygon Amoy</span>
                </span>
                <OrgProfileDropdown />
              </div>
            </header>
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
        <Toaster />
      </SidebarProvider>
    </div>
  );
}
