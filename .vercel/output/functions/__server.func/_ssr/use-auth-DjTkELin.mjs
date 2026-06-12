import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-auth-DjTkELin.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useAuth() {
	const [isLoggedIn, setIsLoggedIn] = (0, import_react.useState)(false);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("examtrust_auth") === "true") setIsLoggedIn(true);
		setIsLoading(false);
	}, []);
	const login = () => {
		localStorage.setItem("examtrust_auth", "true");
		setIsLoggedIn(true);
	};
	const logout = () => {
		localStorage.removeItem("examtrust_auth");
		setIsLoggedIn(false);
	};
	return {
		isLoggedIn,
		isLoading,
		login,
		logout
	};
}
//#endregion
export { useAuth as t };
