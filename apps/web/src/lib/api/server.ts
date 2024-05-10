import { createCallerFactory } from "@acme/api";
import { appRouter } from "@acme/api/routes";

export const serverClient = createCallerFactory(appRouter)(() => {
  return {};
});
