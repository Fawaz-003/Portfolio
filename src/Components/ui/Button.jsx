function Button(props) {
  return (
    <div>
        <button className={`flex justify-center items-center gap-2 px-4 py-2 transition-all ${props.className}`}>
            <span className="w-5 h-5 flex items-center justify-center">{props.icon}</span>
            <span className="text-m">{props.text}</span>
        </button>
    </div>
  )
}

export default Button;