import React from 'react';
import {ReactComponent as Error} from '../svg/error.svg'

function ContactMeButton() {
    return (
        <div>
            <button type="button">
                <Error />
                <span>Contact me</span>
            </button>
            
        </div>
    )
}

export default ContactMeButton