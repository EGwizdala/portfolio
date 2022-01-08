import React from 'react'
import {ReactComponent as Description} from '../svg/description.svg'

interface ResumeButtonProps {
    className: string
}

function ResumeButton(props: ResumeButtonProps) {
    return (
        <div className={props.className}>
            <button type="button" className="btn-icon">
                <Description/>
                <span>My resume</span>
            </button>
            
        </div>
    )
}

export default ResumeButton