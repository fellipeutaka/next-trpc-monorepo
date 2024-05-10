import { z } from "zod";

export const greetingHelloInput = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long"),
});
