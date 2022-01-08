import { ReactComponent as DoneSVG } from '../svg/done.svg';

interface ButtonProps {
    buttonSubmit: any;
}

const Button = (props:ButtonProps) => {


    return (
        <button onClick={props.buttonSubmit}>
         "Wyślij !"
        </button>
    )
}

export default Button;
