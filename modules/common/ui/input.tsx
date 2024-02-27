import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const textInput = (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          icon && "mb-0.5 pl-10",
          className,
        )}
        ref={ref}
        {...props}
      />
    );

    if (icon) {
      return (
        <div className="relative w-full">
          {textInput}
          <span className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        </div>
      );
    }

    return textInput;
  },
);
Input.displayName = "Input";

export { Input };
