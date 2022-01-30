import React from 'react'

interface DarkModeProps {
    className: string
}

const DarkModeButton: React.FC<DarkModeProps> = ({className}) => {
    return (
        <div className={className}>
            <button type="button" className="btn-dark-mode">
               Onn/off
            </button>
            <span className="text-dark-mode"> Dark mode</span>
        </div>
    )
}

export default DarkModeButton