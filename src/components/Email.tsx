import React from 'react';
import { ReactComponent as EmailSVG } from '../svg/mail.svg';


interface EmailProps {
    email: string;
    change: (e: any) => void;
}

 function Email(props:EmailProps) {
    return (
    <div >
        <label className="form-element" htmlFor="email">
            <input type="email" id="email" name="email" value={props.email} onChange = {props.change} placeholder="Email" required></input>
        </label>
    </div>
    )
}



export default  Email

