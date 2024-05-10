import { Code } from "~/components/code";
import { serverClient } from "~/lib/api/server";

const getGreetingCode = `
const greeting = await serverClient.greeting.getHello({
  name: "Acme",
});
`.trim();

export default async function Page() {
  const greeting = await serverClient.greeting.getHello({
    name: "Acme",
  });

  return (
    <main className="container space-y-10">
      <h1 className="text-center font-bold text-5xl">
        This is a page using tRPC on a Server Component
      </h1>

      <section className="space-y-4">
        <h2 className="font-semibold text-2xl md:text-3xl">How to use</h2>
        <Code>{getGreetingCode}</Code>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold text-2xl md:text-3xl">Response</h2>
        <Code>{greeting}</Code>
      </section>
    </main>
  );
}
