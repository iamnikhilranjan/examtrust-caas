import { c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/credential._id-Dxr6Hb8Y.js
var $$splitComponentImporter = () => import("./credential._id-CZtN7UvN.mjs");
var Route = createFileRoute("/credential/$id")({
	head: ({ params }) => ({ meta: [{ title: `Credential ${params.id} — Veritas` }, {
		name: "description",
		content: `On-chain credential record for ${params.id}. Verified by Veritas.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
