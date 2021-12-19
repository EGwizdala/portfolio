import { ReactComponent as DoneSVG } from '../svg/done.svg';

interface ButtonProps {
    buttonSubmit: (e: any) => void;
}

const Button = (props:ButtonProps) => {


    return (
        <button onClick={props.buttonSubmit}>
         "Wyślij !"
        </button>
    )
}

export default Button;
