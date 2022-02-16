import { useState, useEffect, useRef } from 'react'
import ButtonWithIconLink from '../../components/ButtonWithIcon/ButtonWithIconLink';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactComponent as SVGAvatar } from '../../svg/avatar.svg';
import { ReactComponent as Exclamation } from '../../svg/error.svg';
import {ReactComponent as Description} from '../../svg/description.svg'

import './index.sass';

type Number = number;
const AboutMe = () => {
    const elRef = useRef<HTMLDivElement>(null);
    const [topOffset, setTopOffset] = useState<Number>(0);
    const className = "section";

    useEffect(() => {
        AOS.init({ duration: 100 });
    }, [])

    
    return (
        <section
            
            className={className}
            id="aboutMe">
            <h2  
                className={`${className}__header`}>/ About me</h2>
            <div ref={elRef}
                className={`${className}__icon`}>
                <div style={{
                    top: `${topOffset}`
                }}
                    className={`${className}__icon--frame`}></div>
                <SVGAvatar
                    style={{
                    top:  `${topOffset}`
                }} />
                <div  className={`${className}__icon--background`}></div>
            </div>
            <h3 data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className={`${className}__text`}>
                My name is Emilia, and I am a Frontend Developer.
                </h3>
            <p  data-aos="fade"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className={`${className}__text--secondary`}>
                I am a novice frontend developer and an experienced architect. Both paths focus on the user experience, and this has always been a priority for me. Whether it's a building or a mobile application, I know that the most important thing is the satisfaction, safety and comfort of the user. Architecture gave me knowledge, a sense of aesthetics and business foundations, but frontend gave me the passion and joy of creating.
            </p>
            <ButtonWithIconLink
                className="aboutMe"
                icon={<Exclamation />}
                link='#contactMe'>
                Contact Me
            </ButtonWithIconLink>
            <ButtonWithIconLink
                className="aboutMe"
                icon={<Description />}
                link={`${process.env.PUBLIC_URL}/files/cv.pdf`}>
                My resume
            </ButtonWithIconLink>
        </section>
    )
}

export default AboutMe