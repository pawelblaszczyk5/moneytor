import { defineConfig } from "eslint/config";

import core from "@trinse/eslint-config/core";

export default defineConfig({
	languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
	extends: [core],
});
