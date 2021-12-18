import React from 'react';
import ContactMeButton from '../components/ContactMeButton';
import ResumeButton from '../components/ResumeButton';
import { ReactComponent as SVGAvatar } from '../svg/avatar.svg';


function AboutMe() {

    return (
        <div>
            <h2>/ About me</h2>
            <SVGAvatar />
            <h3>My name is Emilia, and I am a Frontend Developer.</h3>
            <p>CSS initiation level Allows me to build web applications for. I try to establish even alignment using shims. I use flexbox properties in my projects. I put visualized elements that are not important to the structure in pseudo-elements.</p>
            <ContactMeButton />
            <ResumeButton />

        </div>
    )
}

export default AboutMe