import type { AppRouter } from "@acme/api/routes";
import { createTRPCReact } from "@trpc/react-query";

export const reactClient = createTRPCReact<AppRouter>();

export const TRPCProvider = reactClient.Provider;
