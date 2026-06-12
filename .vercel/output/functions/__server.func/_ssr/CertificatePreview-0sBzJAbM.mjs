import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as ShieldCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CertificatePreview-0sBzJAbM.js
var import_jsx_runtime = require_jsx_runtime();
function CertificatePreview({ data }) {
	const issued = data.issueDate ? new Date(data.issueDate).toLocaleDateString(void 0, {
		year: "numeric",
		month: "long",
		day: "numeric"
	}) : "—";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full w-full items-center justify-center p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 -z-10 opacity-40 blur-3xl",
			style: { background: "var(--gradient-primary)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl rounded-md bg-[#f6efe1] px-12 py-14 text-[#1a1208] shadow-2xl",
			style: { boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-3 rounded-sm border border-[#8a6a2a]/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-5 rounded-sm border border-[#8a6a2a]/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [data.logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: data.logoUrl,
							alt: "logo",
							className: "h-12 w-12 rounded-full border border-[#8a6a2a]/30 object-cover",
							onError: (e) => e.currentTarget.style.display = "none"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-12 w-12 items-center justify-center rounded-full border border-[#8a6a2a]/30 bg-[#ead9b3]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-[#8a6a2a]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]",
								children: "Issued by"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg font-semibold",
								children: data.institute || "Institute Name"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]",
						children: "Verified On-Chain"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-[#8a6a2a]",
							children: "Certificate"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl font-bold leading-tight",
							children: data.title || "Of Achievement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-4 h-px w-32 bg-[#8a6a2a]/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-sm",
							children: "This is to certify that"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-3xl italic",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderText, { value: "{name}" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-md mx-auto text-sm leading-relaxed",
							children: [
								"has successfully completed",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: data.course || "the prescribed course"
								}),
								" ",
								"with distinction and is hereby awarded this certificate of recognition."
							]
						})
					]
				}),
				data.placeholders.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-3 gap-3 text-center",
					children: data.placeholders.slice(0, 6).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm border border-[#8a6a2a]/20 bg-[#ead9b3]/40 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[9px] uppercase tracking-widest text-[#8a6a2a]",
							children: p.replace(/[{}]/g, "")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderText, { value: p })
						})]
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]",
							children: "Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base",
							children: issued
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base italic",
								children: data.signatory || "Authorized Signatory"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-auto mt-1 h-px w-40 bg-[#8a6a2a]/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.3em] text-[#8a6a2a]",
								children: "Signatory"
							})
						]
					})]
				})
			]
		})]
	});
}
var SAMPLES = {
	"{name}": "Aanya Sharma",
	"{roll_no}": "VA-2025-0142",
	"{marks}": "94 / 100",
	"{grade}": "A+",
	"{course}": "Advanced Solidity",
	"{workshop}": "ZK Proofs Bootcamp",
	"{date}": (/* @__PURE__ */ new Date()).toLocaleDateString()
};
function PlaceholderText({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SAMPLES[value.toLowerCase()] ?? SAMPLES[value] ?? value });
}
//#endregion
export { CertificatePreview as t };
