function PlaceholderIcon({
  symbol = "•",
  size = "md",
  className = "",
}) {
  const sizes = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-14 w-14 text-xl",
  }

  return (
    <div
      className={`
        ${sizes[size]}
        flex items-center justify-center
        rounded-full
        bg-wisdom-beige
        text-wisdom-green
        ${className}
      `}
      aria-hidden="true"
    >
      {symbol}
    </div>
  )
}

export default PlaceholderIcon