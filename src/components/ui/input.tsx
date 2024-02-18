import * as React from "react";

import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "max-w-[42rem] rounded border-[1px] border-solid border-neutral-5 px-5 py-2 focus:border-primary focus:outline-none focus:ring-0 focus:ring-offset-0 dark:border-neutral-3 dark:bg-neutral-4 dark:text-white",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
