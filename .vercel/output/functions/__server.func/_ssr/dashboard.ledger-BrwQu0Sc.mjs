import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { l as Search, w as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as mockLedger } from "./mock-data-CYRczJL7.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-Bc3sudQz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.ledger-BrwQu0Sc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LedgerPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const rows = (0, import_react.useMemo)(() => {
		return mockLedger.filter((r) => {
			if (status !== "all" && r.status !== status) return false;
			if (!q) return true;
			const needle = q.toLowerCase();
			return r.recipient.toLowerCase().includes(needle) || r.course.toLowerCase().includes(needle) || r.txHash.toLowerCase().includes(needle) || r.id.toLowerCase().includes(needle);
		});
	}, [q, status]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Credential Ledger"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Every credential your organization has issued, on-chain and searchable."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search by recipient, course, or tx hash…",
						className: "pl-9"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: status,
					onValueChange: (v) => setStatus(v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "sm:w-48",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All statuses"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Minted",
							children: "Minted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Pending",
							children: "Pending"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "Failed",
							children: "Failed"
						})
					] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-md border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Recipient" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Course" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Issued" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Tx Hash" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Action"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: r.recipient
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground",
						children: r.course
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-muted-foreground",
						children: r.issuedAt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "font-mono text-xs text-muted-foreground",
						children: [
							r.txHash.slice(0, 10),
							"…",
							r.txHash.slice(-6)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.status }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/credential/$id",
							params: { id: r.id },
							className: "inline-flex items-center gap-1 text-xs text-accent hover:underline",
							children: ["View ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
						})
					})
				] }, r.id)), rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 6,
					className: "py-10 text-center text-sm text-muted-foreground",
					children: "No credentials match your filters."
				}) })] })] })
			})]
		})]
	});
}
function StatusBadge({ status }) {
	if (status === "Minted") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "border-transparent bg-accent/20 text-accent hover:bg-accent/25",
		children: "Minted"
	});
	if (status === "Pending") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "outline",
		className: "border-primary/40 text-primary",
		children: "Pending"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "destructive",
		children: "Failed"
	});
}
//#endregion
export { LedgerPage as component };
