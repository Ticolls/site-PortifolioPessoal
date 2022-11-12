import './Button.css'

function ButtonRoot({ children, ...props }) {
    return (
        <button className='button-root' {...props}>
            {children}
        </button>
    )
}

function ButtonText({ children }) {
    return (
        <p className='button-text'>
            {children}
        </p>
    )
}

function ButtonIcon({ children }) {
    return (
        <div className='button-icon'>
            {children}
        </div>
    )
}

export const Button = {
    Root: ButtonRoot,
    Text: ButtonText,
    Icon: ButtonIcon
}