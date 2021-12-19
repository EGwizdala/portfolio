import React from 'react';
import {ReactComponent as Exclamation} from '../svg/error.svg'

function ContactMeButton() {
    return (
        <div>
            <button type="button">
                <Exclamation />
                <span>Contact me</span>
            </button>
            
        </div>
    )
}

export default ContactMeButton