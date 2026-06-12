import { d as Link, f as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { L as Building2, z as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as useAuth } from "./use-auth-DjTkELin.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-LU100qfR.js
var import_jsx_runtime = require_jsx_runtime();
function RegisterOrganization() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		login();
		navigate({ to: "/" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "dark min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md space-y-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold tracking-tight",
							children: "Register Organization"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Create an organization to start issuing verified certificates for your courses."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-6 bg-card p-6 border border-border rounded-xl shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "orgName",
									children: "Organization Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "orgName",
									placeholder: "e.g. Veritas Academy",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "website",
									children: "Website (Optional)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "website",
									type: "url",
									placeholder: "https://"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "adminEmail",
									children: "Admin Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "adminEmail",
									type: "email",
									placeholder: "admin@example.com",
									required: true
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						style: {
							background: "var(--gradient-primary)",
							boxShadow: "var(--shadow-glow)"
						},
						children: "Register Organization"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), " Back to home"]
					})
				})
			]
		})
	});
}
//#endregion
export { RegisterOrganization as component };
