import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  className?: string;
}

const base = "inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-secondary text-white hover:opacity-90",
  ghost: "text-white border border-white/35 bg-white/20 backdrop-blur-sm hover:bg-white/10",
};

function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export default Button;
