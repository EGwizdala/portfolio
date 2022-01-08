import React from 'react';
import DarkModeButton from '../components/DarkModeButton';
import ContactMeButton from '../components/ContactMeButton';
import NavSection from '../components/NavSection';
import "../styles/Nav.sass"

function Nav() {
    const className = "Nav_element"
    return (
        <nav className = "Nav">
            <DarkModeButton className= {className}/>
            <ContactMeButton className={className}/>
            <NavSection className= {className}/>
        </nav>
    )
}

export default Nav