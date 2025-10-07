import { defineConfig } from "eslint/config";

import core from "@trinse/eslint-config/core";
import markdown from "@trinse/eslint-config/markdown";

export default defineConfig(
	{
		languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
		extends: [markdown, core],
	},
	{ files: ["src/**/*.md"], rules: { "markdown/no-html": ["error", { allowed: ["Badge"] }] } },
	{ files: ["src/.vitepress/config.ts"], rules: { "import-x/no-default-export": "off" } },
);
