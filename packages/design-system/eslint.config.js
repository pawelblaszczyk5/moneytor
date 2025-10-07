import { defineConfig } from "eslint/config";

import core from "@trinse/eslint-config/core";
import react from "@trinse/eslint-config/react";

export default defineConfig({
	languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname } },
	extends: [core, react],
});
