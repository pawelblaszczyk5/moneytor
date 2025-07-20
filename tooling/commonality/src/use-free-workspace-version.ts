import type { Check, PackageJson } from "commonality";

import { json } from "commonality";

export default {
	level: "error",
	message: "Workspace dependencies mustn't use specific version",
	validate: async (context) => {
		const currentWorkspace = await json<PackageJson>(context.package.path, "package.json").get();

		if (!currentWorkspace) {
			return false;
		}

		const workspaceDependenciesWithoutExactVersion = Object.entries({
			...currentWorkspace.dependencies,
			...currentWorkspace.devDependencies,
			...currentWorkspace.peerDependencies,
		})
			.filter(([name, version]) => {
				if (!name.startsWith("@moneytor/")) {
					return false;
				}

				return version !== "workspace:*";
			})
			.map(([name]) => name);

		if (workspaceDependenciesWithoutExactVersion.length > 0) {
			return {
				message: `These workspace dependencies, must use free "workspace:*" protocol versioning: ${workspaceDependenciesWithoutExactVersion.join(", ")}`,
				path: "package.json",
			};
		}

		return true;
	},
} satisfies Check;
