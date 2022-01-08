import React from 'react';
import ContactMeButton from '../components/ContactMeButton';
import ResumeButton from '../components/ResumeButton';
import { ReactComponent as SVGAvatar } from '../svg/avatar.svg';
import '../styles/AboutMe.sass'
import '../styles/_btn-icon.sass'

function AboutMe() {

    return (
        <section className = "section">
            <h2 className="section__header">/ About me</h2>
            <div className="section__icon">
                <SVGAvatar />
            </div>
                <h3 className = "section__text">My name is Emilia, and I am a Frontend Developer.</h3>
                <p className = "section__text--secondary">CSS initiation level Allows me to build web applications for. I try to establish even alignment using shims. I use flexbox properties in my projects. I put visualized elements that are not important to the structure in pseudo-elements.</p>
    
            
            <ContactMeButton className="btn-icon"/>
            <ResumeButton className="btn-icon"/>

        </section>
    )
}

export default AboutMe