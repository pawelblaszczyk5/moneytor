import { defineConfig } from "eslint/config";

import core from "@moneytor/eslint-config/core";
import react from "@moneytor/eslint-config/react";
import node from "@moneytor/eslint-config/node";

export default defineConfig(
	{ languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } } },
	{ extends: [core, react, node], files: ["**/*.{ts,tsx,js,jsx}"] },
	{ files: ["vite.config.ts", "src/framework/entry.rsc.tsx"], rules: { "import-x/no-default-export": "off" } },
	{ files: ["src/**"], rules: { "@typescript-eslint/require-await": "off" } },
);
