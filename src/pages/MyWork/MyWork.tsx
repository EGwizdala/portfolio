import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


import Gallery from '../Gallery/Gallery';
import SectionWithIcon from '../../components/SectionWithIcon'
import { ReactComponent as SVGCode } from '../../svg/code.svg';
import { ReactComponent as SVGDesign } from '../../svg/design.svg'
import { ReactComponent as SVGDevelope } from '../../svg/develope.svg';
import './index.sass';

function MyWork() {
   ;
    const articles: {icon: JSX.Element, text:string, key: number}[]  = [
        {   
            icon: <SVGCode />,
            text: "I always try to look for the best solutions. Each project gives me new skills and tools to create faster and better code.",
            key: 1,
        },
        {
            icon: <SVGDesign />,
            text: "User-friendly design is a must for me. I always try to create neat designs with a sense of space and logic. But I also love the little details that bring the app to life.",
            key: 2,
        },
        {
            icon: <SVGDevelope />,
            text: "I am constantly developing and learning new technologies. Each project I have implemented differs not only in context and subject matter, but also in technical background.",
            key: 3,
        }
    ];
    const sectionsDisplay = articles.map(article => {
        return (
            <SectionWithIcon
                aosIcon="zoom-in"
                aosText="fade"
                key={article.key}
                icon={article.icon}
                text={article.text}
                classNameIcon={"iconDiv"} />
        )
    });
    const className = "section-myWork";

    useEffect(() => {
        AOS.init({ duration: 100 }); 
    }, [])
    
    return (
        <section className = {className} id = "myWork">
            <h2 
                className={`${className}__header`}>
                / About my work
            </h2>
            <h3
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className={`${className}__text`}>
                Every project is made with passion!
            </h3>
            <ul
        
                className={`${className}__articles`}>
                {sectionsDisplay}
            </ul>
            <h3
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="linear"
                className={`${className}__text`}>
                Some of my projects:
            </h3>
            <Gallery />
        </section>
    )
}

export default MyWork