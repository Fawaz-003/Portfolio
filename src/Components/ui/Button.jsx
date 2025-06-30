function Button(props) {
  const classes = `flex justify-center items-center gap-2 px-4 py-2 transition-all ${props.className}`;

  if (props.href) {
    return (
      <a href={props.href} download className={classes}>
        <span className="w-5 h-5 flex items-center justify-center">{props.icon}</span>
        <span className="text-m">{props.text}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={props.onClick}>
      <span className="w-5 h-5 flex items-center justify-center">{props.icon}</span>
      <span className="text-m">{props.text}</span>
    </button>
  );
}

export default Button;
