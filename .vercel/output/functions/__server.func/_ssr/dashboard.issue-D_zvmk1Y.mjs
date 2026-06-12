import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
import { A as CircleCheck, D as CloudUpload, S as FileText, a as Sparkles, v as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as mockTemplates } from "./mock-data-CYRczJL7.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { a as SelectValue, c as TableCell, d as TableRow, i as SelectTrigger, l as TableHead, n as SelectContent, o as Table, r as SelectItem, s as TableBody, t as Select, u as TableHeader } from "./table-Bc3sudQz.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.issue-D_zvmk1Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
function parseCsv(text) {
	const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	if (lines.length === 0) return {
		headers: [],
		rows: []
	};
	const split = (line) => {
		const out = [];
		let cur = "";
		let inQ = false;
		for (let i = 0; i < line.length; i++) {
			const c = line[i];
			if (c === "\"") if (inQ && line[i + 1] === "\"") {
				cur += "\"";
				i++;
			} else inQ = !inQ;
			else if (c === "," && !inQ) {
				out.push(cur);
				cur = "";
			} else cur += c;
		}
		out.push(cur);
		return out;
	};
	return {
		headers: split(lines[0]),
		rows: lines.slice(1).map(split)
	};
}
function CsvDropzone({ onParsed }) {
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const inputRef = (0, import_react.useRef)(null);
	const handleFile = (file) => {
		const reader = new FileReader();
		reader.onload = () => {
			const { headers, rows } = parseCsv(String(reader.result ?? ""));
			onParsed({
				headers,
				rows,
				fileName: file.name
			});
		};
		reader.readAsText(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onDragOver: (e) => {
			e.preventDefault();
			setDragging(true);
		},
		onDragLeave: () => setDragging(false),
		onDrop: (e) => {
			e.preventDefault();
			setDragging(false);
			const f = e.dataTransfer.files?.[0];
			if (f) handleFile(f);
		},
		onClick: () => inputRef.current?.click(),
		className: `flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition-colors ${dragging ? "border-primary bg-primary/5" : "border-border bg-muted/20 hover:border-primary/60 hover:bg-muted/30"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground",
				style: { background: "var(--gradient-primary)" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-7 w-7" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium",
				children: "Drag & drop your CSV"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "or click to browse — first row should match your template placeholders"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3 w-3" }), " .csv up to 5MB"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: inputRef,
				type: "file",
				accept: ".csv,text/csv",
				className: "hidden",
				onChange: (e) => {
					const f = e.target.files?.[0];
					if (f) handleFile(f);
				}
			})
		]
	});
}
var STAGES = [
	"Encrypting Data…",
	"Deploying to Ledger…",
	"Minting Complete"
];
function IssuancePage() {
	const [templateId, setTemplateId] = (0, import_react.useState)(mockTemplates[0].id);
	const [csv, setCsv] = (0, import_react.useState)(null);
	const [stage, setStage] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const startMint = () => {
		if (!csv) return toast.error("Upload a CSV first");
		setDone(false);
		setStage(0);
		let i = 0;
		const tick = () => {
			i++;
			if (i < STAGES.length) {
				setStage(i);
				setTimeout(tick, 1100);
			} else {
				setStage(STAGES.length - 1);
				setDone(true);
				toast.success(`Minted ${csv.rows.length} credentials`);
			}
		};
		setTimeout(tick, 1100);
	};
	const progress = stage === null ? 0 : (stage + 1) / STAGES.length * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Batch Issuance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Pick a template, upload your CSV, mint to the blockchain in one shot."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-2 block text-xs uppercase tracking-wider text-muted-foreground",
							children: "1. Select Template"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: templateId,
							onValueChange: setTemplateId,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "max-w-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: mockTemplates.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: t.id,
								children: t.name
							}, t.id)) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: [
								"Expected columns:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-foreground",
									children: mockTemplates.find((t) => t.id === templateId)?.placeholders.map((p) => p.replace(/[{}]/g, "")).join(", ")
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-3 block text-xs uppercase tracking-wider text-muted-foreground",
						children: "2. Upload Recipient Data"
					}), !csv ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CsvDropzone, { onParsed: setCsv }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: csv.fileName
								}),
								" ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [csv.rows.length, " rows"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: () => setCsv(null),
							children: "Replace file"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-h-80 overflow-auto rounded-md border border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: csv.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: h }, h)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: csv.rows.slice(0, 50).map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: r.map((c, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-mono text-xs",
							children: c
						}, j)) }, i)) })] })
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "mb-3 block text-xs uppercase tracking-wider text-muted-foreground",
						children: "3. Review & Mint"
					}), stage === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: startMint,
						disabled: !csv,
						className: "h-12 px-8 text-base font-semibold text-primary-foreground",
						style: {
							background: "var(--gradient-primary)",
							boxShadow: "var(--shadow-glow)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mr-2 h-5 w-5" }), " Mint to Blockchain"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: progress }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm",
								children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: STAGES[stage] })]
							}),
							done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									setStage(null);
									setCsv(null);
									setDone(false);
								},
								children: "Issue another batch"
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { IssuancePage as component };
