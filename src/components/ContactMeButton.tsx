import React from 'react';
import { ReactComponent as Exclamation } from '../svg/error.svg'
import '../styles/_btn-icon.sass'


interface ContactMeButtonProps {
    className: string
}
//In general: please add React.FC as type const ContactMeButton: React.FC<Props> = ({ className }) => {...}
function ContactMeButton(props: ContactMeButtonProps) {
    return (
        <div className={props.className}>
            <button type="button" className="btn-icon">
                <Exclamation />
                <span>Contact me</span>
            </button>
        </div>
    )
}

export default ContactMeButton