
import React from 'react';
import { ReactComponent as DoneSVG } from '../svg/done.svg';

interface ButtonProps {
    buttonSubmit: any;
}

const Button: React.FC<ButtonProps> = ({children, buttonSubmit}) => {

    // TODO: wyślij -> send
    // TODO: analize generic approach
    return (
        <button onClick={buttonSubmit}>
          {children}
        </button>
    )
}

export default Button;
