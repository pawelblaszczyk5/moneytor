import type { ReactFormState } from "react-dom/client";

import { createFromReadableStream } from "@vitejs/plugin-rsc/ssr";
import { use } from "react";
import { renderToReadableStream } from "react-dom/server.edge";
import { injectRSCPayload } from "rsc-html-stream/server";

import type { RscPayload } from "#src/framework/entry.rsc.js";

export const renderHTML = async (
	rscStream: ReadableStream<Uint8Array>,
	options: { formState?: ReactFormState | undefined; nonce?: string },
) => {
	const [rscStream1, rscStream2] = rscStream.tee();

	let payload: Promise<RscPayload>;

	// eslint-disable-next-line @typescript-eslint/promise-function-async -- that's fine there
	const SsrRoot = () => {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- this will suspend so it's valid that this will be reassigned
		payload ??= createFromReadableStream<RscPayload>(rscStream1);

		return use(payload).root;
	};

	const bootstrapScriptContent = await import.meta.viteRsc.loadBootstrapScriptContent("index");

	const htmlStream = await renderToReadableStream(<SsrRoot />, {
		bootstrapScriptContent,
		// @ts-expect-error -- untyped field
		formState: options.formState,
		nonce: options.nonce,
	});

	const responseStream = htmlStream.pipeThrough(
		injectRSCPayload(rscStream2, { ...(options.nonce ? { nonce: options.nonce } : {}) }),
	);

	return responseStream;
};
