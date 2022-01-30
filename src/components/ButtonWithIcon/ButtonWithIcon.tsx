import './index.sass'

interface ButtonWithIconProps {
    className: string
    icon: React.ReactNode
    onClick: (e: React.FormEvent<EventTarget>) => void
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ className, icon, onClick, children }) => {

    return (
        <button
            type="button"
            className={`btn ${className}--btn`}
            onClick={onClick}
        >
            {icon}
            <span  className={`btn ${className}--btn-text`}>{children}</span>
        </button>
    )
}

export default ButtonWithIcon