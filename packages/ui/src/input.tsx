import { tv } from "@acme/tailwind";
import { forwardRef } from "react";

export const InputStyles = tv({
  base: [
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:font-medium file:text-sm",
  ],
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { type = "text", className, ...rest } = props;

    return (
      <input
        {...rest}
        type={type}
        className={InputStyles({ className })}
        ref={ref}
      />
    );
  },
);
