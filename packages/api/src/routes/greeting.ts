import { greetingHelloInput } from "@acme/dto/api/greeting";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const greetingRoute = createTRPCRouter({
  getHello: publicProcedure.input(greetingHelloInput).mutation(({ input }) => {
    const { name } = input;

    return `Hello, ${name}!`;
  }),
});
