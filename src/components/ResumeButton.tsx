import React from 'react'
import {ReactComponent as Description} from '../svg/description.svg'

function ResumeButton() {
    return (
        <div>
            <button type="button">
                <Description/>
                <span>My resume</span>
            </button>
            
        </div>
    )
}

export default ResumeButton