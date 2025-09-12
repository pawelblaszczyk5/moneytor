import type { SVGProps } from "react";

import { createContext, use } from "react";

import { assert } from "@moneytor/assert";

export type IconName = "webhook";

// eslint-disable-next-line react-refresh/only-export-components -- this won't ever be HMR-edited
export const IconSpritesheetContext = createContext<null | string>(null);

IconSpritesheetContext.displayName = "IconSpritesheetContext";

export const Icon = ({ height, name, width, ...props }: Readonly<SVGProps<SVGSVGElement> & { name: IconName }>) => {
	const spritesheet = use(IconSpritesheetContext);

	assert(spritesheet, "IconSpritesheetContext must be provided globally");

	return (
		<svg height={height ?? 20} width={width ?? 20} aria-hidden {...props}>
			<use href={`${spritesheet}#${name}`} />
		</svg>
	);
};
