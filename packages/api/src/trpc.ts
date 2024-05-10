import { ZodError } from "@acme/dto/zod/zod-error";
import { initTRPC } from "@trpc/server";
import { transformer } from "./transformer";

// This is a placeholder for any context you might want to add to your tRPC context
// For now, it's an empty object
export type TRPCContext = Record<string, never>;

const t = initTRPC.context<TRPCContext>().create({
  transformer,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const {
  router: createTRPCRouter,
  procedure: publicProcedure,
  createCallerFactory,
  middleware,
  mergeRouters,
} = t;
