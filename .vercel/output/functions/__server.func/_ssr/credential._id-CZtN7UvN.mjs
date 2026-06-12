import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Route } from "./credential._id-Dxr6Hb8Y.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { A as CircleCheck, T as Download, k as CircleX, o as ShieldCheck, s as Share2, w as ExternalLink, z as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as CertificatePreview } from "./CertificatePreview-0sBzJAbM.mjs";
import { t as mockLedger } from "./mock-data-CYRczJL7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/credential._id-CZtN7UvN.js
var import_jsx_runtime = require_jsx_runtime();
function CredentialPage() {
	const { id } = Route.useParams();
	const record = mockLedger.find((r) => r.id === id) ?? {
		id,
		recipient: "Aanya Sharma",
		course: "Advanced Solidity",
		issuedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
		txHash: "0x" + Array.from({ length: 40 }).map(() => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join(""),
		status: "Minted"
	};
	const isValid = record.status === "Minted";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground",
						style: {
							background: "var(--gradient-primary)",
							boxShadow: "var(--shadow-glow)"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold",
						children: "Veritas"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/verify",
					className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Verify another"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-6xl gap-8 px-6 pb-24 pt-10 lg:grid-cols-[1fr_360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2",
					children: [isValid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						className: "border-transparent bg-accent/20 text-accent hover:bg-accent/25",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-1 h-3 w-3" }), " Verified on-chain"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "destructive",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-1 h-3 w-3" }),
							" ",
							record.status
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs text-muted-foreground",
						children: record.id
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-card/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificatePreview, { data: {
						title: "Of Completion",
						institute: "Veritas Academy",
						course: record.course,
						issueDate: record.issuedAt,
						logoUrl: "",
						signatory: "Dr. Meera Joshi",
						placeholders: []
					} })
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Recipient"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-xl font-semibold",
									children: record.recipient
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Course",
											value: record.course
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Issued",
											value: record.issuedAt
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Issuer",
											value: "Veritas Academy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Network",
											value: "Polygon Amoy",
											accent: true
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Transaction Hash"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-all font-mono text-xs",
									children: record.txHash
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline",
									children: ["View on explorer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "h-11",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "mr-1 h-4 w-4" }), " LinkedIn"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "h-11 text-primary-foreground",
								style: {
									background: "var(--gradient-primary)",
									boxShadow: "var(--shadow-glow)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-4 w-4" }), " PDF"]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Row({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: accent ? "text-accent" : "text-foreground",
			children: value
		})]
	});
}
//#endregion
export { CredentialPage as component };
