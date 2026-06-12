//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-CYRczJL7.js
var mockTemplates = [
	{
		id: "tpl_completion",
		name: "Course Completion Certificate",
		institute: "Veritas Academy",
		placeholders: [
			"{name}",
			"{course}",
			"{grade}"
		]
	},
	{
		id: "tpl_excellence",
		name: "Excellence Award",
		institute: "Veritas Academy",
		placeholders: [
			"{name}",
			"{roll_no}",
			"{marks}"
		]
	},
	{
		id: "tpl_workshop",
		name: "Workshop Participation",
		institute: "Veritas Academy",
		placeholders: [
			"{name}",
			"{workshop}",
			"{date}"
		]
	}
];
var mockLedger = Array.from({ length: 18 }).map((_, i) => {
	const names = [
		"Aanya Sharma",
		"Rohan Mehta",
		"Priya Iyer",
		"Karan Patel",
		"Saanvi Rao",
		"Vihaan Kapoor",
		"Ira Nair",
		"Aarav Gupta",
		"Diya Khanna"
	];
	const courses = [
		"Advanced Solidity",
		"ZK Proofs 101",
		"DeFi Architecture",
		"Smart Contract Security",
		"Web3 UX Design"
	];
	const statuses = [
		"Minted",
		"Minted",
		"Minted",
		"Pending",
		"Failed"
	];
	const hash = "0x" + Array.from({ length: 40 }).map(() => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("");
	const date = /* @__PURE__ */ new Date(Date.now() - i * 864e5 * 2);
	return {
		id: `cred_${1e3 + i}`,
		recipient: names[i % names.length],
		course: courses[i % courses.length],
		issuedAt: date.toISOString().slice(0, 10),
		txHash: hash,
		status: statuses[i % statuses.length]
	};
});
//#endregion
export { mockTemplates as n, mockLedger as t };
