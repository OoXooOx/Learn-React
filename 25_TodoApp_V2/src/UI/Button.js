function Button({ onClick, children, title, disabled = false }) {
    return (
        <>
            <button
                className="b3"
                onClick={onClick}
                title={title}
                disabled={disabled}>{children}</button>
        </>
    )
}
export default Button;
