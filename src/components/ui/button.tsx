import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-dark text-light hover:bg-dark/90 dark:bg-light dark:text-dark dark:hover:bg-light/90": variant === "default",
            "border border-dark bg-transparent hover:bg-dark hover:text-light dark:border-light dark:hover:bg-light dark:hover:text-dark": variant === "outline",
            "hover:bg-dark/10 hover:text-dark dark:hover:bg-light/10 dark:hover:text-light": variant === "ghost",
            "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600": variant === "destructive",
            "h-10 py-2 px-4": size === "default",
            "h-9 px-3": size === "sm",
            "h-11 px-8": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

