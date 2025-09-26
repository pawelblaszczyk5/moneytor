import { serve } from "srvx/node";
import { serveStatic } from "srvx/static";

import handler from "./dist/server/server.js";

const server = serve({ fetch: handler.fetch, middleware: [serveStatic({ dir: "./dist/client" })], port: 3200 });

await server.ready();
