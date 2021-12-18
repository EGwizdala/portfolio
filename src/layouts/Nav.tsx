import React from 'react';
import DarkModeButton from '../components/DarkModeButton';
import ContactMeButton from '../components/ContactMeButton';
import NavSection from '../components/NavSection';

function Nav() {
    return (
        <nav>
            <DarkModeButton />
            <ContactMeButton />
            <NavSection />
        </nav>
    )
}

export default Nav