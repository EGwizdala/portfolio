import React from 'react';
import { ReactComponent as SVGHtml } from '../svg/html.svg';
import { ReactComponent as SVGCss } from '../svg/css.svg';
import { ReactComponent as SVGJavaScript } from '../svg/javascript.svg';
import { ReactComponent as SVGReact } from '../svg/react.svg';




function MySkills() {

    const technologies: string[] = ["git", "npm", "TypeScript", "Express.js", "Node.js", "Ejs", "C++", "MySQL", "MongoDB", "Heroku"];

    let key: number = 0;

    const technologiesDisplay = technologies.map(element => {
        key++;
        return <li key={`tech${key}`}>{element}</li>
    })
    
    return (
        <section>
            <h2>/ About my skills</h2>
            <h4>Technologies I work with:</h4>
            <div>
                <SVGHtml />
                <SVGCss />
                <SVGJavaScript />
                <SVGReact />
                <div>Html5</div>
                <div>Css3</div>
                <div>JavaScript</div>
                <div>React</div>
            </div>
            <h4>I also use:</h4>
            <ul>{technologiesDisplay}</ul>
        </section>
    )
}

export default MySkills