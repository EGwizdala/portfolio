import React from 'react';
import Gallery from './Gallery';
import Section from '../components/Section'
import { ReactComponent as SVGCode } from '../svg/code.svg';
import { ReactComponent as SVGDesign } from '../svg/design.svg'
import { ReactComponent as SVGDevelope } from '../svg/develope.svg';


function MyWork() {
    const sections: {icon: JSX.Element, text:string, key: number}[]  = [
        {   
            icon: <SVGCode />,
            text: "I always try to look for the best solutions. Each project is giving me new skills and tools to build faster and cleaner code.  ",
            key: 1,
        },
        {
            icon: <SVGDesign />,
            text: "I am a design freak. I like when things go smooth and neat with a sense of space and logic. Furthermore, I love that little details that bring the project to life.",
            key: 2,
        },
        {
            icon: <SVGDevelope />,
            text: "I am constantly developing and learning new technologies. Each project differs not only in context and subject matter, but also in the background. ",
            key: 3,
        }
    ];

    const sectionsDisplay = sections.map(section => {
        return (
            <Section key={section.key} icon={section.icon} text={section.text}/>
       )
    })

    return (
        <div>
            <h2>/ About my work</h2>
            <h4>Every project is made with passion!</h4>
            <ul>{sectionsDisplay}</ul>
            <h4>Some of my projects:</h4>
            <Gallery />
        </div>
    )
}

export default MyWork