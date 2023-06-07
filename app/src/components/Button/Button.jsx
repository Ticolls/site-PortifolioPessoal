import './Button.css'

function ButtonRoot({ children, ...props }) {
    return (
        <a className='button-root' {...props} href='src/assets/Curriculo_Thiago_Seixas.pdf' download>
            {children}
        </a>
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