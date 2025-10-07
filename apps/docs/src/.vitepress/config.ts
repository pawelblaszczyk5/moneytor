// cspell:words timescaledb

import { defineConfig } from "vitepress";

export default defineConfig({
	// eslint-disable-next-line unicorn/prevent-abbreviations -- that's how it's named in the vitepress
	cacheDir: "../node_modules/.cache/vitepress",
	description: "Project documentation",
	head: [["link", { href: "/trinse.svg", rel: "icon" }]],
	lastUpdated: true,
	// eslint-disable-next-line unicorn/prevent-abbreviations -- that's how it's named in the vitepress
	outDir: "../dist/",
	themeConfig: {
		nav: [
			{ link: "/", text: "Home" },
			{ activeMatch: "general", link: "/general/whats-trinse", text: "General" },
			{ activeMatch: "development", link: "/development/intro", text: "Development" },
		],
		outline: "deep",
		search: { provider: "local" },
		sidebar: [
			{
				collapsed: false,
				items: [
					{ link: "/general/whats-trinse", text: "What's Trinse?" },
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
						items: [{ link: "/development/adr/004-alternative-architecture", text: "4. Alternative architecture" }],
						link: "/development/adr",
						text: "ADR",
					},
					{ link: "/development/useful-commands", text: "Useful commands" },
				],
				text: "Development",
			},
		],
		socialLinks: [{ icon: "github", link: "https://github.com/pawelblaszczyk5/trinse" }],
	},
	title: "Trinse",
	vite: { server: { port: 4_205 } },
});
