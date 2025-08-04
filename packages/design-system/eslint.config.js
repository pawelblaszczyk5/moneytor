import { defineConfig } from "eslint/config";

import core from "@moneytor/eslint-config/core";
import react from "@moneytor/eslint-config/react";

export default defineConfig(
	{ languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } } },
	{ extends: [core, react], files: ["**/*.{ts,tsx,js,jsx}"] },
);
