// cspell:words timescaledb

import { defineConfig } from "vitepress";

export default defineConfig({
	// eslint-disable-next-line unicorn/prevent-abbreviations -- that's how it's named in the vitepress
	cacheDir: "../node_modules/.cache/vitepress",
	description: "Project documentation",
	lastUpdated: true,
	// eslint-disable-next-line unicorn/prevent-abbreviations -- that's how it's named in the vitepress
	outDir: "../dist/",
	themeConfig: {
		nav: [
			{ link: "/", text: "Home" },
			{ activeMatch: "general", link: "/general/whats-moneytor", text: "General" },
			{ activeMatch: "development", link: "/development/intro", text: "Development" },
		],
		outline: "deep",
		search: { provider: "local" },
		sidebar: [
			{
				collapsed: false,
				items: [
					{ link: "/general/whats-moneytor", text: "What's Moneytor?" },
					{ link: "/general/features", text: "Features" },
				],
				text: "General",
			},
			{
				collapsed: false,
				items: [
					{ link: "/development/intro", text: "Intro" },
					{
						collapsed: false,
						items: [
							{ link: "/development/adr/001-database", text: "1. Database" },
							{ link: "/development/adr/002-frontend-framework", text: "2. Frontend framework" },
							{ link: "/development/adr/003-backend-architecture", text: "3. Backend architecture" },
						],
						link: "/development/adr",
						text: "ADR",
					},
					{ link: "/development/useful-commands", text: "Useful commands" },
				],
				text: "Development",
			},
		],
		socialLinks: [{ icon: "github", link: "https://github.com/pawelblaszczyk5/moneytor" }],
	},
	title: "Moneytor",
	vite: { preview: { port: 3_205 }, server: { port: 4_205 } },
});
