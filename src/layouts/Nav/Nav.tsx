import NavMenu from '../../components/NavMenu';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';
import { ReactComponent as Exclamation } from '../../svg/error.svg';
import './index.sass';

function Nav() {
    const className = "navigation__element";
    const handleClick = () => {
        console.log("KLIK")
    };
    return (
        <nav className="navigation">
            <a href="#contactMe">
                <ButtonWithIcon
                    className={className} icon={<Exclamation />} onClick={handleClick}>Contact Me</ButtonWithIcon></a>
            <NavMenu className= {className}/>
        </nav>
    )
}

export default Nav