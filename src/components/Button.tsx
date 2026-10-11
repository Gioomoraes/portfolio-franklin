import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 active:scale-[0.98]";

  const variantStyles = {
    primary: "bg-teal text-navy hover:bg-teal/90",
    secondary: "border border-teal text-teal hover:bg-teal/10",
  };

  return (
    <a href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </a>
  );
}
