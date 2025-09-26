import { defineConfig } from "eslint/config";

import core from "@moneytor/eslint-config/core";
import react from "@moneytor/eslint-config/react";
import node from "@moneytor/eslint-config/node";

export default defineConfig(
	{ languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } } },
	{ extends: [core, react, node], files: ["**/*.{ts,tsx,js,jsx}"] },
	{ files: ["vite.config.ts"], rules: { "import-x/no-default-export": "off" } },
	{
		files: ["src/routes/**"],
		rules: { "canonical/filename-no-index": "off", "@typescript-eslint/no-use-before-define": "off" },
	},
	{ ignores: ["src/routeTree.gen.ts", "server.ts"] },
);
