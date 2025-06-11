import { Link } from "react-router-dom";

const variants = {
  primary: "bg-primary hover:bg-secondary text-white",
  secondary: "bg-accent/20 hover:bg-accent/30 text-primary",
  outline:
    "border-2 border-primary hover:bg-primary hover:text-white text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200";
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  const classes = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
