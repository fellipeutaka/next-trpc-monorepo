import type { AppRouter } from "@acme/api/routes";
import { createTRPCClient } from "@trpc/client";
import { trpcLinks } from "./shared";

export const nativeClient = createTRPCClient<AppRouter>({
  links: trpcLinks,
});
