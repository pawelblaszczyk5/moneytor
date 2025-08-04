import type { ViteReactPluginApi } from "@vitejs/plugin-react";
import type { Plugin } from "vite";

// @ts-expect-error - untyped module
import stylexPlugin from "@stylexjs/postcss-plugin";
import react from "@vitejs/plugin-react";
import rsc from "@vitejs/plugin-rsc";
import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";

const typedStylexPlugin = stylexPlugin as (options: {
	babelConfig?: unknown;
	cwd?: string;
	exclude?: Array<string>;
	include?: Array<string>;
	useCSSLayers?: boolean;
}) => never;

const getBabelConfig = (isDevelopment: boolean) => ({
	plugins: [
		["babel-plugin-react-compiler", {}],
		["@babel/plugin-syntax-jsx", {}],
		[
			"@stylexjs/babel-plugin",
			{
				dev: isDevelopment,
				enableMediaQueryOrder: true,
				importSources: ["@moneytor/stylex"],
				treeshakeCompensation: true,
				unstable_moduleResolution: { type: "commonJS" },
			},
		],
	],
	presets: ["@babel/preset-typescript"],
});

const disableReactCompilerInSsrContext = () =>
	({
		api: {
			reactBabel: (babelConfig, context) => {
				if (!context.ssr) {
					return;
				}

				babelConfig.plugins = babelConfig.plugins.filter((plugin) => {
					if (
						plugin === "babel-plugin-react-compiler"
						|| (Array.isArray(plugin) && plugin[0] === "babel-plugin-react-compiler")
					) {
						return false;
					}

					return true;
				});
			},
		} satisfies ViteReactPluginApi,
		name: "disable-react-compiler-in-ssr-context",
	}) satisfies Plugin;

export default defineConfig((environment) => {
	const isDevelopment = environment.command === "serve";

	return {
		css: {
			postcss: {
				plugins: [
					typedStylexPlugin({
						babelConfig: { ...getBabelConfig(isDevelopment), babelrc: false },
						include: ["./src/**/*.{js,jsx,ts,tsx}"],
						useCSSLayers: true,
					}),
				],
			},
		},
		environments: {
			client: { build: { rollupOptions: { input: { index: "./src/framework/entry.browser.tsx" } } } },
			rsc: { build: { rollupOptions: { input: { index: "./src/framework/entry.rsc.tsx" } } } },
			ssr: { build: { rollupOptions: { input: { index: "./src/framework/entry.ssr.tsx" } } } },
		},
		plugins: [rsc(), react({ babel: getBabelConfig(isDevelopment) }), disableReactCompilerInSsrContext(), inspect()],
		preview: { port: 3_200 },
		server: { port: 4_200 },
	};
});
