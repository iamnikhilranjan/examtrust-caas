import { c as lazyRouteComponent, d as Link, l as createFileRoute, n as Scripts, o as createRouter, p as useRouter, r as HeadContent, s as Outlet, u as createRootRouteWithContext, w as redirect } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Route$12 } from "./credential._id-Dxr6Hb8Y.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-GlERSSdJ.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BiBHxYKB.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ExamTrust" },
			{
				name: "description",
				content: "ExamTrust Application"
			},
			{
				name: "author",
				content: "ExamTrust"
			},
			{
				property: "og:title",
				content: "ExamTrust"
			},
			{
				property: "og:description",
				content: "ExamTrust Application"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@ExamTrust"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;1,500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$9 = () => import("./verify-CguFd_uO.mjs");
var Route$10 = createFileRoute("/verify")({
	head: () => ({ meta: [{ title: "Verify a Credential — ExamTrust" }, {
		name: "description",
		content: "Drop a credential PDF or paste an ID, URL, or transaction hash to instantly verify authenticity on-chain."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./register-LU100qfR.mjs");
var Route$9 = createFileRoute("/register")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./login-DGjjVFqc.mjs");
var Route$8 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard-9yu7Tmk3.mjs");
var Route$7 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Org Dashboard — ExamTrust" }, {
		name: "description",
		content: "Design templates, batch-issue credentials, and audit your ledger."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./routes-CPifo8R8.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "ExamTrust — Decentralized Credentialing" }, {
		name: "description",
		content: "Issue tamper-proof, on-chain credentials in minutes. Zero code required."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var Route$5 = createFileRoute("/dashboard/")({ beforeLoad: () => {
	throw redirect({ to: "/dashboard/templates" });
} });
var $$splitComponentImporter$4 = () => import("./dashboard.templates-DmFrtp0G.mjs");
var Route$4 = createFileRoute("/dashboard/templates")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./dashboard.settings-DhyPx--y.mjs");
var Route$3 = createFileRoute("/dashboard/settings")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard.ledger-BrwQu0Sc.mjs");
var Route$2 = createFileRoute("/dashboard/ledger")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./dashboard.issue-D_zvmk1Y.mjs");
var Route$1 = createFileRoute("/dashboard/issue")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./dashboard.analytics-BjIsR87I.mjs");
var Route = createFileRoute("/dashboard/analytics")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var VerifyRoute = Route$10.update({
	id: "/verify",
	path: "/verify",
	getParentRoute: () => Route$11
});
var RegisterRoute = Route$9.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$11
});
var LoginRoute = Route$8.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$11
});
var DashboardRoute = Route$7.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$11
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var DashboardIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var DashboardTemplatesRoute = Route$4.update({
	id: "/templates",
	path: "/templates",
	getParentRoute: () => DashboardRoute
});
var DashboardSettingsRoute = Route$3.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => DashboardRoute
});
var DashboardLedgerRoute = Route$2.update({
	id: "/ledger",
	path: "/ledger",
	getParentRoute: () => DashboardRoute
});
var DashboardIssueRoute = Route$1.update({
	id: "/issue",
	path: "/issue",
	getParentRoute: () => DashboardRoute
});
var DashboardAnalyticsRoute = Route.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => DashboardRoute
});
var CredentialIdRoute = Route$12.update({
	id: "/credential/$id",
	path: "/credential/$id",
	getParentRoute: () => Route$11
});
var DashboardRouteChildren = {
	DashboardAnalyticsRoute,
	DashboardIssueRoute,
	DashboardLedgerRoute,
	DashboardSettingsRoute,
	DashboardTemplatesRoute,
	DashboardIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren),
	LoginRoute,
	RegisterRoute,
	VerifyRoute,
	CredentialIdRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
