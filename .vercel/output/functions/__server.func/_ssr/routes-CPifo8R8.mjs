import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { R as ArrowRight, a as Sparkles, o as ShieldCheck, t as Zap } from "../_libs/lucide-react.mjs";
import { t as useAuth } from "./use-auth-DjTkELin.mjs";
import { t as OrgProfileDropdown } from "./OrgProfileDropdown-CRevuAb2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CPifo8R8.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	const { isLoggedIn, logout } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						children: "ExamTrust"
					})]
				}), isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrgProfileDropdown, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card",
					children: "Sign In"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-6 pb-24 pt-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-accent" }), " Gasless minting on Layer-2"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl",
						children: [
							"Decentralized credentialing,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-clip-text text-transparent",
								style: { backgroundImage: "var(--gradient-primary)" },
								children: "zero code required"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-base text-muted-foreground",
						children: "Design certificate templates, batch-mint to the blockchain, and let anyone verify authenticity in one click."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-3",
						children: [isLoggedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard/templates",
							className: "inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-semibold text-primary-foreground",
							style: {
								background: "var(--gradient-primary)",
								boxShadow: "var(--shadow-glow)"
							},
							children: ["Start Issuing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "inline-flex h-12 items-center gap-2 rounded-md px-6 text-sm font-semibold text-primary-foreground",
							style: {
								background: "var(--gradient-primary)",
								boxShadow: "var(--shadow-glow)"
							},
							children: "Sign In"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							className: "inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium hover:bg-card",
							children: "Register Organization"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/verify",
							className: "inline-flex h-12 items-center rounded-md border border-border bg-card/40 px-6 text-sm font-medium hover:bg-card",
							children: "Verify a Credential"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid gap-4 sm:grid-cols-3",
						children: [
							{
								icon: Zap,
								title: "Gasless Minting",
								body: "Layer-2 settlement, sponsored fees."
							},
							{
								icon: ShieldCheck,
								title: "Tamper-Proof",
								body: "Cryptographic hashes on-chain."
							},
							{
								icon: Sparkles,
								title: "Instant Verify",
								body: "Public portal, no login needed."
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card/40 p-5 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-accent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-lg font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: f.body
								})
							]
						}, f.title))
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
