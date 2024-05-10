"use client";

import { forwardRef } from "react";

import { tv } from "@acme/tailwind";
import { Root } from "@radix-ui/react-label";

export const LabelStyles = tv({
  base: [
    "text-sm font-medium leading-none",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ],
});

export type LabelProps = React.ComponentPropsWithoutRef<typeof Root>;

export const Label = forwardRef<React.ElementRef<typeof Root>, LabelProps>(
  function Label({ className, ...props }, ref) {
    return <Root ref={ref} className={LabelStyles({ className })} {...props} />;
  },
);
