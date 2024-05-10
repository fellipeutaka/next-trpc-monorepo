"use client";

import { Button } from "@acme/ui/button";
import { Icons } from "@acme/ui/icons";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";

interface CodeProps extends React.ComponentPropsWithoutRef<"pre"> {}

export function Code(props: CodeProps) {
  const [copy, isCopied] = useCopyToClipboard();
  const code = props.children?.toString() ?? "";

  return (
    <pre className="group relative rounded-lg border p-4" {...props}>
      <code>{props.children}</code>

      <Button
        className="absolute top-3 right-4 z-10 size-8 opacity-0 group-hover:opacity-100"
        size="icon"
        variant="outline"
        onClick={() => copy({ text: code })}
        aria-label="Copy code to clipboard"
      >
        <Icons.Copy
          data-visible={isCopied}
          className="absolute size-4 scale-100 transition-transform data-[visible='true']:scale-0"
        />
        <Icons.Check
          data-visible={isCopied}
          className="size-4 transition-transform data-[visible='false']:scale-0"
        />
      </Button>
    </pre>
  );
}
