import React from 'react';
import Header from '../pages/Header';
import AboutMe from '../pages/AboutMe';
import MySkills from '../pages/MySkills';
import MyWork from '../pages/MyWork';
import ContactMe from '../pages/ContactMe'


function Main() {
    return (
        <main>
            <Header />
            <AboutMe />
            <MySkills />
            <MyWork />
            <ContactMe />
        </main>
    )
}

export default Main