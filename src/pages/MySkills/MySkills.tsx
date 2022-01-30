import React, { ReactFragment } from 'react';

import SectionWithIcon from '../../components/SectionWithIcon'

import { ReactComponent as SVGHtml } from '../../svg/html.svg';
import { ReactComponent as SVGCss } from '../../svg/css.svg';
import { ReactComponent as SVGJavaScript } from '../../svg/javascript.svg';
import { ReactComponent as SVGReact } from '../../svg/react.svg';
import './index.sass'


function MySkills() {

    const mainTechnologies: {icon: ReactFragment, text: string}[] = [
        { icon: <SVGHtml />, text: "Html5" },
        { icon: <SVGCss />, text: "Css3" },
        { icon: <SVGJavaScript />, text: "JavaScript" },
        { icon: <SVGReact />, text: "React"},
    ]
    const technologies: string[] = ["git", "npm", "TypeScript", "Express.js", "Node.js", "Ejs", "C++", "MySQL", "MongoDB", "Heroku"];
    const mainTechnologiesDisplay = mainTechnologies.map(element => {
    
        return <SectionWithIcon key={element.text} text={element.text} icon={element.icon} classNameIcon = "skill-icon"/>
    });

    let key: number = 0;
    const technologiesDisplay = technologies.map(element => {
        key++;
        return <li key={`tech${key}`}>{element}</li>
    });
    
    const className = 'section-skills'

    return (
        <section className= {className} id= "mySkills">
            <h2
                className={`${className}__header`}>
                / About my skills</h2>
            <h3
                className={`${className}__text`}>
                Technologies I work with:</h3>
            <div
                className={`${className}__icons`}>
                {mainTechnologiesDisplay}
            </div>
            <h3
                className={`${className}__text`}>
                I also use:
            </h3>
            <ul
                className={`${className}__technologies`}>
                {technologiesDisplay}
            </ul>
        </section>
    )
}

export default MySkills