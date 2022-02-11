import './index.sass'

interface ButtonWithIconProps {
    className: string
    icon: React.ReactNode
    link: string
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ className, icon, link, children }) => {

    return (
        <a
            href = {link}
            type="button"
            className={`btn ${className}--btn`}
        >
            {icon}
            <span  className={`btn ${className}--btn-text`}>{children}</span>
        </a>
    )
}

export default ButtonWithIcon