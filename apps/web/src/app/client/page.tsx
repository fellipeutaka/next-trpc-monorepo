import { Greeting } from "~/components/client/greeting";

export default function Page() {
  return (
    <main className="container space-y-10">
      <h1 className="text-center font-bold text-5xl">
        This is a page using tRPC on a Client Component
      </h1>

      <Greeting />
    </main>
  );
}
