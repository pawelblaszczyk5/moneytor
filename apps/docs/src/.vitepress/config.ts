import { defineConfig } from "vitepress";

export default defineConfig({
	// eslint-disable-next-line unicorn/prevent-abbreviations -- that's how it's named in the vitepress
	cacheDir: "../node_modules/.cache/vitepress",
	description: "Project documentation",
	// eslint-disable-next-line unicorn/prevent-abbreviations -- that's how it's named in the vitepress
	outDir: "../dist/",
	themeConfig: {
		nav: [
			{ link: "/", text: "Home" },
			{ link: "/example", text: "Docs" },
		],
		search: { provider: "local" },
		sidebar: [{ items: [{ link: "/example", text: "Example" }], text: "Pages" }],
		socialLinks: [{ icon: "github", link: "https://github.com/pawelblaszczyk5/moneytor" }],
	},
	title: "Moneytor",
	vite: { server: { port: 4_205 } },
});
