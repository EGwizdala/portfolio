import React from 'react'
import {ReactComponent as Description} from '../svg/description.svg'

interface ResumeButtonProps {
    className: string
}
// more generic ButtonWithIcon or ButtonSignificant
// you could consider restylin to emphasize clickability
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