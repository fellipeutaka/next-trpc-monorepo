"use client";

import { greetingHelloSchema } from "@acme/dto/client/greeting";
import { Button } from "@acme/ui/button";
import { Form, useForm } from "@acme/ui/form";
import { Icons } from "@acme/ui/icons";
import { Input } from "@acme/ui/input";
import { toast } from "@acme/ui/toast";
import { reactClient } from "~/lib/api/react";
import { Code } from "../code";

const getGreetingCode = `
const greetingMutation = reactClient.greeting.getHello.useMutation();

await greetingMutation.mutateAsync({
  name: "Acme",
});
`.trim();

export function Greeting() {
  const form = useForm({
    schema: greetingHelloSchema,
    defaultValues: {
      name: "Acme",
    },
  });

  const greetingMutation = reactClient.greeting.getHello.useMutation();

  const handleGreeting = form.handleSubmit((data) => {
    toast.promise(greetingMutation.mutateAsync(data), {
      loading: "Greeting...",
      success(data) {
        return data;
      },
      error(error) {
        return error.message || "An unexpected error occurred";
      },
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={handleGreeting} className="space-y-8">
        <Form.Field
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Your name</Form.Label>
              <Form.Control>
                <Input placeholder="fellipeutaka" {...field} />
              </Form.Control>
              <Form.Description>
                This is the name that will be used to greet you
              </Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button type="submit" disabled={greetingMutation.isPending}>
          {greetingMutation.isPending && (
            <Icons.Loader aria-hidden className="mr-2 size-4 animate-spin" />
          )}
          Greet me
        </Button>
      </form>

      <section className="space-y-4">
        <h2 className="font-semibold text-2xl md:text-3xl">How to use</h2>
        <Code>{getGreetingCode}</Code>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-2xl md:text-3xl">Response</h2>
        <Code>
          {JSON.stringify(greetingMutation.data ?? "undefined", null, 2)}
        </Code>
      </section>
    </Form>
  );
}
