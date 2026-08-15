const variants = {
  primary:
    "bg-wisdom-rust text-white hover:bg-wisdom-orange",
  secondary:
    "border border-wisdom-green text-wisdom-green hover:bg-wisdom-green hover:text-white",
  teal:
    "bg-wisdom-teal text-white hover:opacity-90",
  ghost:
    "text-wisdom-green hover:bg-wisdom-beige/50",
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-3.5 text-base",
  }

  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-full
        font-body font-semibold
        transition-all duration-200
        focus:outline-none focus:ring-2
        focus:ring-wisdom-rust/40
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button