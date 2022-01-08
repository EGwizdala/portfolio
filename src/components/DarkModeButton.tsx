import React from 'react'

interface DarkModeProps {
    className: string
}

function DarkModeButton(props:DarkModeProps) {
    return (
        <div className={props.className}>
            <button type="button" className="btn-dark-mode">
               Onn/off
            </button>
            <span className="text-dark-mode"> Dark mode</span>
        </div>
    )
}

export default DarkModeButton