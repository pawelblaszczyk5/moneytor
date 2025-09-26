import { defineConfig } from "eslint/config";

import core from "@moneytor/eslint-config/core";

export default defineConfig({
	languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
	extends: [core],
});
