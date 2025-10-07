import { defineConfig } from "eslint/config";

import core from "@trinse/eslint-config/core";
import react from "@trinse/eslint-config/react";
import node from "@trinse/eslint-config/node";

export default defineConfig(
	{
		extends: [core, react, node],
		ignores: ["src/routeTree.gen.ts"],
		languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
	},
	{ files: ["vite.config.ts"], rules: { "import-x/no-default-export": "off" } },
	{
		files: ["src/routes/**"],
		rules: { "canonical/filename-no-index": "off", "@typescript-eslint/no-use-before-define": "off" },
	},
);
