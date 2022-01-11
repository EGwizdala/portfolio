import React from 'react';
import { ReactComponent as SVGHtml } from '../svg/html.svg';
import { ReactComponent as SVGCss } from '../svg/css.svg';
import { ReactComponent as SVGJavaScript } from '../svg/javascript.svg';
import { ReactComponent as SVGReact } from '../svg/react.svg';
import '../styles/MySkills.sass'



function MySkills() {

    const technologies: string[] = ["git", "npm", "TypeScript", "Express.js", "Node.js", "Ejs", "C++", "MySQL", "MongoDB", "Heroku"];

    let key: number = 0;

    const technologiesDisplay = technologies.map(element => {
        key++;
        return <li key={`tech${key}`}>{element}</li>
    })
    
    return (
        <section className= "section--skills">
            <h2 className= "section--skills__header">/ About my skills</h2>
            <h3 className = "section--skills__text">Technologies I work with:</h3>
            {/* could be extracted to another component */}
            <div className = "section--skills__icons">
                <SVGHtml />
                <SVGCss />
                <SVGJavaScript />
                <SVGReact />
                <caption>Html5</caption>
                <caption>Css3</caption>
                <caption>JavaScript</caption>
                <caption>React</caption>
            </div>
            <h3 className = "section--skills__text">I also use:</h3>
            <ul className = "section--skills__technologies">{technologiesDisplay}</ul>
        </section>
    )
}

export default MySkills