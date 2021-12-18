import React from 'react';
import Gallery from '../components/Gallery'
import { ReactComponent as SVGCode } from '../svg/code.svg';
import { ReactComponent as SVGDesign } from '../svg/design.svg'
import { ReactComponent as SVGDevelope } from '../svg/develope.svg';

declare namespace JSX {
    interface IntrinsicElements {
      foo: any;
    }
  }


function MyWork() {

    const sections = [
        {
            icon: <SVGCode />,
            text: "I always try to look for the best solutions. Each project is giving me new skills and tools to build faster and cleaner code.  ",
        },
        {
            icon: <SVGDesign />,
            text: "I am a design freak. I like when things go smooth and neat with a sense of space and logic. Furthermore, I love that little details that bring the project to life.",
        },
        {
            icon: <SVGDevelope />,
            text: "I am constantly developing and learning new technologies. Each project differs not only in context and subject matter, but also in the background. ",
        }
    ];

    let key: number = 0

    const sectionsDisplay = sections.map(element => {
        key++;
        return (
            <div key = {`sections${key}`}>
            {element.icon}
            <div>{element.text}</div>
            </div>
       )
    })
    
    return (
        <div>
            <h2>/ About my work</h2>
            <h4>Every project is made with passion!</h4>
            <ul>{sectionsDisplay}</ul>
            <h4>Some of my projects:</h4>
            <Gallery/>
        </div>
    )
}

export default MyWork