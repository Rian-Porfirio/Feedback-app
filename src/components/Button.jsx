function Button({children, type, version, isDisable}) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
    {children}
    </button>
  )
}

Button.defaultProps = {
    disabled: false,
    version: "primary",
    type:"button"
}
export default Button
