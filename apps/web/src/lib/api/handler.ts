import { fetchRequestHandler } from "@acme/api/fetch-adapter";
import { appRouter } from "@acme/api/routes";
import type { NextRequest } from "next/server";
import { apiEndpoint } from "./shared";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: apiEndpoint,
    req,
    router: appRouter,
    createContext: () => {
      return {};
    },
    onError:
      process.env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  });

export { handler as GET, handler as POST };
