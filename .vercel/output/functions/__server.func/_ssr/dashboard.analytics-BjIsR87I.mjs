import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { C as FileBadge, I as ChartColumn, i as TrendingUp, r as Users } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.analytics-BjIsR87I.js
var import_jsx_runtime = require_jsx_runtime();
function AnalyticsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold tracking-tight",
					children: "Analytics Overview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2",
					children: "Monitor your credential issuance and verification metrics across the network."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						title: "Total Issued",
						value: "1,248",
						change: "+12%",
						icon: FileBadge
					},
					{
						title: "Total Verified",
						value: "8,392",
						change: "+24%",
						icon: Users
					},
					{
						title: "Success Rate",
						value: "99.8%",
						change: "+0.1%",
						icon: TrendingUp
					},
					{
						title: "Network Savings",
						value: "$420",
						change: "+5%",
						icon: ChartColumn
					}
				].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border bg-card p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted-foreground",
							children: stat.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, { className: "h-4 w-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold",
							children: stat.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-success",
							children: stat.change
						})]
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-xl border bg-card flex flex-col items-center justify-center min-h-[400px] text-muted-foreground shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-12 w-12 mb-4 opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Detailed verification charts will appear here." })]
			})
		]
	});
}
//#endregion
export { AnalyticsPage as component };
