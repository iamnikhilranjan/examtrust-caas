import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as Link, f as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { A as CircleCheck, D as CloudUpload, E as Copy, R as ArrowRight, S as FileText, d as ScanLine, f as RotateCcw, k as CircleX, l as Search, m as QrCode, n as X, o as ShieldCheck, v as LoaderCircle, w as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-CguFd_uO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function parseInput(raw) {
	const value = raw.trim();
	if (!value) return null;
	try {
		const match = new URL(value).pathname.match(/\/credential\/([^/?#]+)/);
		if (match?.[1]) return {
			id: decodeURIComponent(match[1]),
			source: "url"
		};
	} catch {}
	if (/^0x[a-f0-9]{40,}$/i.test(value)) return {
		id: value,
		source: "hash"
	};
	return {
		id: value,
		source: "id"
	};
}
async function sha256Hex(file) {
	const buf = await file.arrayBuffer();
	const digest = await crypto.subtle.digest("SHA-256", buf);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
function mockLookup(key, source, documentHash) {
	const invalid = /fail|bad|tamper|invalid/i.test(key);
	const id = source === "pdf" ? `cred_${key.slice(0, 8)}` : key;
	const hash = documentHash ?? (key.startsWith("0x") ? key.slice(2).padEnd(64, "0").slice(0, 64) : Array.from(key + "examtrust").reduce((h, c) => h * 31 + c.charCodeAt(0) >>> 0, 7).toString(16).padEnd(64, "a").slice(0, 64));
	const mintedAt = (/* @__PURE__ */ new Date(Date.now() - 1e3 * 60 * 60 * 24 * 11)).toISOString();
	return {
		valid: !invalid,
		credentialId: id,
		documentHash: hash,
		txHash: "0x" + Array.from(hash).reverse().join("").padEnd(64, "f").slice(0, 64),
		mintedAt,
		issuer: "ExamTrust Academy",
		issuerWallet: "0x7A91…F3B2",
		network: "Polygon Amoy",
		block: 8421577,
		recipient: "Aanya Sharma",
		course: "Advanced Solidity",
		source,
		reason: invalid ? "Document hash not found on the issuer's ledger" : void 0
	};
}
function VerifyPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const [fileHash, setFileHash] = (0, import_react.useState)(null);
	const [hashing, setHashing] = (0, import_react.useState)(false);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [verifying, setVerifying] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const inputRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const handleFile = async (f) => {
		if (f.type !== "application/pdf" && !f.name.toLowerCase().endsWith(".pdf")) {
			toast.error("Please upload a PDF file");
			return;
		}
		if (f.size > 20 * 1024 * 1024) {
			toast.error("PDF must be smaller than 20MB");
			return;
		}
		setFile(f);
		setFileHash(null);
		setResult(null);
		setHashing(true);
		try {
			setFileHash(await sha256Hex(f));
		} catch {
			toast.error("Could not read file");
			setFile(null);
		} finally {
			setHashing(false);
		}
	};
	const clearFile = () => {
		setFile(null);
		setFileHash(null);
		if (inputRef.current) inputRef.current.value = "";
	};
	const reset = () => {
		setResult(null);
		setQ("");
		clearFile();
	};
	const submit = (e) => {
		e.preventDefault();
		let res;
		if (file && fileHash) res = mockLookup(fileHash, "pdf", fileHash);
		else {
			const parsed = parseInput(q);
			if (!parsed) {
				toast.error("Enter a credential ID, URL, or drop a PDF");
				return;
			}
			res = mockLookup(parsed.id, parsed.source);
		}
		setVerifying(true);
		setTimeout(() => {
			setVerifying(false);
			setResult(res);
		}, 750);
	};
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
						children: "ExamTrust"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/templates",
					className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-card/50 px-4 py-2 text-sm font-medium hover:bg-card",
					children: ["Open Dashboard ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-2xl px-6 pb-24 pt-16",
				children: !result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "h-3 w-3 text-accent" }), " Public verification portal"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mx-auto mt-6 font-display text-5xl font-bold leading-tight",
							children: [
								"Verify any",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-clip-text text-transparent",
									style: { backgroundImage: "var(--gradient-primary)" },
									children: "credential"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-md text-base text-muted-foreground",
							children: "Drop the credential PDF, or paste an ID, share URL, or transaction hash. We'll match it against the on-chain record — no login required."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "mt-10 space-y-4 text-left",
							children: [
								!file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									role: "button",
									tabIndex: 0,
									onKeyDown: (e) => {
										if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
									},
									className: `flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center transition-colors ${dragging ? "border-primary bg-primary/5" : "border-border bg-card/30 hover:border-primary/60 hover:bg-card/50"}`,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground",
											style: { background: "var(--gradient-primary)" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudUpload, { className: "h-6 w-6" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: "Drag & drop a credential PDF"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "We'll hash it locally and check the ledger — your file never leaves your browser."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: inputRef,
											type: "file",
											accept: "application/pdf,.pdf",
											className: "hidden",
											onChange: (e) => {
												const f = e.target.files?.[0];
												if (f) handleFile(f);
											}
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 rounded-xl border border-border bg-card/40 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate text-sm font-medium",
												children: file.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "truncate font-mono text-xs text-muted-foreground",
												children: hashing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Hashing…"]
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
													"SHA-256 · ",
													fileHash?.slice(0, 24),
													"…"
												] })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: clearFile,
											className: "rounded-md p-1.5 text-muted-foreground hover:bg-destructive/15 hover:text-destructive",
											"aria-label": "Remove file",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 py-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] uppercase tracking-widest text-muted-foreground",
											children: "or"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: q,
												onChange: (e) => setQ(e.target.value),
												placeholder: "cred_1001, https://…/credential/…, or 0x9f3a…",
												className: "h-12 pl-9 font-mono text-sm",
												maxLength: 512
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											disabled: hashing || verifying,
											className: "h-12 px-6 font-semibold text-primary-foreground",
											style: {
												background: "var(--gradient-primary)",
												boxShadow: "var(--shadow-glow)"
											},
											children: verifying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-1 h-4 w-4 animate-spin" }), " Verifying"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Verify ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })] })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											className: "h-12 w-12 shrink-0 p-0",
											title: "Scan QR Code",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "h-5 w-5" })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-center text-xs text-muted-foreground",
							children: [
								"Try",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setQ("cred_1001"),
									className: "font-mono text-accent hover:underline",
									children: "cred_1001"
								}),
								" ",
								"for a valid sample, or",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setQ("cred_failed"),
									className: "font-mono text-destructive hover:underline",
									children: "cred_failed"
								}),
								" ",
								"to see a failed check."
							]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultPanel, {
					result,
					onReset: reset,
					onView: () => navigate({
						to: "/credential/$id",
						params: { id: result.credentialId }
					})
				})
			})]
		})
	});
}
function ResultPanel({ result, onReset, onView }) {
	const valid = result.valid;
	const minted = new Date(result.mintedAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-in space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center",
				children: [
					valid ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-24 w-24 items-center justify-center rounded-full",
						style: {
							background: "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--success) 35%, transparent), transparent 70%), color-mix(in oklab, var(--success) 18%, transparent)",
							boxShadow: "var(--shadow-success)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-0 animate-ping rounded-full opacity-40",
							style: { background: "color-mix(in oklab, var(--success) 35%, transparent)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "relative h-12 w-12",
							style: { color: "var(--success)" },
							strokeWidth: 2.2
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-24 w-24 items-center justify-center rounded-full bg-destructive/15 ring-1 ring-destructive/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, {
							className: "h-12 w-12 text-destructive",
							strokeWidth: 2.2
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-4xl font-bold",
						children: valid ? "Credential Verified" : "Verification Failed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm text-muted-foreground",
						children: valid ? `This credential is authentic and was issued on-chain by ${result.issuer}.` : result.reason ?? "We could not find a matching record on the ledger."
					}),
					valid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
						style: {
							color: "var(--success)",
							background: "color-mix(in oklab, var(--success) 14%, transparent)",
							border: "1px solid color-mix(in oklab, var(--success) 30%, transparent)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }),
							" On-chain · ",
							result.network
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-2xl border bg-card/40",
				style: { borderColor: valid ? "color-mix(in oklab, var(--success) 30%, transparent)" : "color-mix(in oklab, var(--destructive) 35%, transparent)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-px bg-border/60 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Issuer",
								value: result.issuer,
								mono: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Issuer Wallet",
								value: result.issuerWallet
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Minted",
								value: `${minted.toLocaleDateString(void 0, {
									year: "numeric",
									month: "short",
									day: "numeric"
								})} · ${minted.toLocaleTimeString(void 0, {
									hour: "2-digit",
									minute: "2-digit"
								})}`,
								mono: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Block",
								value: `#${result.block.toLocaleString()}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Recipient",
								value: result.recipient,
								mono: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Course",
								value: result.course,
								mono: false
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border/60 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRow, {
							label: "Document SHA-256",
							value: result.documentHash
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HashRow, {
								label: "Transaction Hash",
								value: result.txHash,
								explorer: true
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-px border-t border-border/60 bg-border/60 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
								label: "Hash matches ledger",
								pass: valid
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
								label: "Issuer signature valid",
								pass: valid
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
								label: "Not revoked",
								pass: valid
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check$1, {
								label: "Source",
								pass: true,
								note: result.source === "pdf" ? "PDF upload" : result.source === "url" ? "Share URL" : result.source === "hash" ? "Tx hash" : "Credential ID"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-center gap-2",
				children: [valid && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onView,
					className: "h-11 px-5 font-semibold text-primary-foreground",
					style: {
						background: "var(--gradient-primary)",
						boxShadow: "var(--shadow-glow)"
					},
					children: ["View full credential ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					className: "h-11",
					onClick: onReset,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-4 w-4" }), " Verify another"]
				})]
			})
		]
	});
}
function Field({ label, value, mono = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-card/60 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mt-1 truncate text-sm ${mono ? "font-mono" : "font-medium"}`,
			children: value
		})]
	});
}
function HashRow({ label, value, explorer }) {
	const copy = async () => {
		try {
			await navigator.clipboard.writeText(value);
			toast.success("Copied to clipboard");
		} catch {
			toast.error("Copy failed");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[10px] uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 flex items-center gap-2 rounded-md border border-border bg-background/50 px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "flex-1 truncate font-mono text-xs",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: copy,
				className: "rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground",
				"aria-label": "Copy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3.5 w-3.5" })
			}),
			explorer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				className: "rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-accent",
				"aria-label": "View on explorer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
			})
		]
	})] });
}
function Check$1({ label, pass, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 bg-card/60 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 font-medium",
			style: { color: pass ? "var(--success)" : "var(--destructive)" },
			children: [pass ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }), note ?? (pass ? "Pass" : "Fail")]
		})]
	});
}
//#endregion
export { VerifyPage as component };
