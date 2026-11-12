export default function Button({ children, className = "", href, ...props }) {
  const classes = `button ${className}`.trim();
  if (href)
    return (
      <a className={classes} href={href} {...props}>
        {children}
        <span aria-hidden="true">→</span>
      </a>
    );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
