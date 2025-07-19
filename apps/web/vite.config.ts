import type { ViteReactPluginApi } from "@vitejs/plugin-react";
import type { Plugin } from "vite";

import react from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";
import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";

const disableReactCompilerInSsrContext = () =>
	({
		api: {
			reactBabel: (babelConfig, context) => {
				if (!context.ssr) {
					return;
				}

				babelConfig.plugins = babelConfig.plugins.filter((plugin) => plugin !== "babel-plugin-react-compiler");
			},
		} satisfies ViteReactPluginApi,
		name: "disable-react-compiler-in-ssr-context",
	}) satisfies Plugin;

export default defineConfig({
	environments: {
		client: { build: { rollupOptions: { input: { index: "./src/framework/entry.browser.tsx" } } } },
		rsc: { build: { rollupOptions: { input: { index: "./src/framework/entry.rsc.tsx" } } } },
		ssr: { build: { rollupOptions: { input: { index: "./src/framework/entry.ssr.tsx" } } } },
	},
	plugins: [
		rsc(),
		react({ babel: { plugins: ["babel-plugin-react-compiler"] } }),
		disableReactCompilerInSsrContext(),
		inspect(),
	],
});
