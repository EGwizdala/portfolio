import { Link } from '../Link';
import { ReactComponent as SVGArrowDown } from '../../svg/arrow_drop_up.svg';
import "./index.sass"

export const GoHomeButton = () => {
    return (
        <Link className = "goHome" href="#header">
            <SVGArrowDown />
        </Link> 
    )
}
