import type { Check, PackageJson } from "commonality";

import { json } from "commonality";

export default {
	level: "error",
	message: `Package mustn't have a "version" field in package.json`,
	validate: async (context) => {
		const packageJson = await json<PackageJson>(context.package.path, "package.json").get();

		if (!packageJson) {
			return false;
		}

		const fieldValue = packageJson.version;

		return fieldValue === undefined;
	},
} satisfies Check;
