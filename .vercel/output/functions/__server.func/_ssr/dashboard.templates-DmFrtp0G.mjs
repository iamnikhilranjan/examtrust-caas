import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { E as Copy, h as Plus, n as X, p as Rocket } from "../_libs/lucide-react.mjs";
import { t as CertificatePreview } from "./CertificatePreview-0sBzJAbM.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.templates-DmFrtp0G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlaceholderChips({ value, onChange }) {
	const [draft, setDraft] = (0, import_react.useState)("");
	const add = () => {
		const raw = draft.trim().replace(/[{}\s]/g, "");
		if (!raw) return;
		const tag = `{${raw}}`;
		if (value.includes(tag)) {
			toast.info("Placeholder already exists");
			return;
		}
		onChange([...value, tag]);
		setDraft("");
	};
	const remove = (tag) => onChange(value.filter((t) => t !== tag));
	const copy = (tag) => {
		navigator.clipboard?.writeText(tag);
		toast.success(`Copied ${tag}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "e.g. roll_no",
				value: draft,
				onChange: (e) => setDraft(e.target.value),
				onKeyDown: (e) => {
					if (e.key === "Enter") {
						e.preventDefault();
						add();
					}
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				variant: "secondary",
				onClick: add,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1 h-4 w-4" }), " Add"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [value.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "No placeholders yet."
			}), value.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "group inline-flex items-center gap-1 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-mono text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => copy(tag),
					className: "flex items-center gap-1 hover:text-accent",
					title: "Copy to clipboard",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3 opacity-60" }), tag]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => remove(tag),
					className: "ml-1 rounded-full p-0.5 text-muted-foreground hover:bg-destructive/20 hover:text-destructive",
					"aria-label": `Remove ${tag}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
				})]
			}, tag))]
		})]
	});
}
var initial = {
	title: "Of Completion",
	institute: "Veritas Academy",
	course: "Advanced Solidity",
	issueDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
	logoUrl: "",
	signatory: "Dr. Meera Joshi",
	placeholders: [
		"{name}",
		"{roll_no}",
		"{marks}",
		"{grade}"
	]
};
function TemplateBuilderPage() {
	const [state, setState] = (0, import_react.useState)(initial);
	const update = (key, val) => setState((s) => ({
		...s,
		[key]: val
	}));
	const onSave = () => {
		console.log("Save & Deploy template", state);
		toast.success("Template saved", { description: "Wire this button to your API + smart contract deploy." });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-[calc(100vh-3.5rem)] grid-cols-1 lg:grid-cols-[440px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-y-auto border-r border-border bg-card/30 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold",
					children: "Template Builder"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Design once. Mint thousands. Changes preview live on the right."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Template Title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: state.title,
							onChange: (e) => update("title", e.target.value),
							placeholder: "Of Excellence"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Institute Name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: state.institute,
							onChange: (e) => update("institute", e.target.value),
							placeholder: "Veritas Academy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Course Name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: state.course,
							onChange: (e) => update("course", e.target.value),
							placeholder: "Advanced Solidity"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Issue Date",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								value: state.issueDate,
								onChange: (e) => update("issueDate", e.target.value)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Logo URL",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: state.logoUrl,
								onChange: (e) => update("logoUrl", e.target.value),
								placeholder: "https://…/logo.png"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Authorized Signatory",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: state.signatory,
							onChange: (e) => update("signatory", e.target.value),
							placeholder: "Dr. Meera Joshi"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "space-y-3 border-border/60 bg-background/40 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-sm font-medium",
							children: "Dynamic Placeholders"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Add metadata tags your CSV columns will fill in."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderChips, {
							value: state.placeholders,
							onChange: (next) => update("placeholders", next)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: onSave,
						className: "h-12 w-full text-base font-semibold text-primary-foreground",
						style: {
							background: "var(--gradient-primary)",
							boxShadow: "var(--shadow-glow)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "mr-2 h-5 w-5" }), " Save & Deploy Template"]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-y-auto bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CertificatePreview, { data: state })
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { TemplateBuilderPage as component };
