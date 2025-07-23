import { defineConfig } from "eslint/config";

import core from "@moneytor/eslint-config/core";
import markdown from "@moneytor/eslint-config/markdown";

export default defineConfig(
	{ languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } } },
	{ extends: [markdown], files: ["**/*.md"] },
	{ extends: [core], files: ["**/*.{ts,tsx,js,jsx}"] },
	{ files: ["src/.vitepress/config.ts"], rules: { "import-x/no-default-export": "off" } },
);
