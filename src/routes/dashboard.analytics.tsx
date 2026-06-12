import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, TrendingUp, Users, FileBadge } from "lucide-react";

export const Route = createFileRoute("/dashboard/analytics")({
  component: AnalyticsPage,
});

function AnalyticsPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Overview</h1>
        <p className="text-muted-foreground mt-2">
          Monitor your credential issuance and verification metrics across the network.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Issued", value: "1,248", change: "+12%", icon: FileBadge },
          { title: "Total Verified", value: "8,392", change: "+24%", icon: Users },
          { title: "Success Rate", value: "99.8%", change: "+0.1%", icon: TrendingUp },
          { title: "Network Savings", value: "$420", change: "+5%", icon: BarChart3 },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <h2 className="text-3xl font-bold">{stat.value}</h2>
              <span className="text-xs font-medium text-success">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border bg-card flex flex-col items-center justify-center min-h-[400px] text-muted-foreground shadow-sm">
        <BarChart3 className="h-12 w-12 mb-4 opacity-20" />
        <p>Detailed verification charts will appear here.</p>
      </div>
    </div>
  );
}
