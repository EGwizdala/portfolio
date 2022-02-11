import { useState, useEffect, useRef } from 'react'
import ButtonWithIconLink from '../../components/ButtonWithIcon/ButtonWithIconLink';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useScrollDirection } from 'react-use-scroll-direction'

import { ReactComponent as SVGAvatar } from '../../svg/avatar.svg';
import { ReactComponent as Exclamation } from '../../svg/error.svg';
import {ReactComponent as Description} from '../../svg/description.svg'

import './index.sass';

type Any = any | undefined;
const AboutMe = () => {
    const elRef = useRef<HTMLDivElement>(null);
    const [topOffset, setTopOffset] = useState<Any>(0);
    const className = "section";
    let counter = 1;
    const { 
        isScrollingUp,
        isScrollingDown,
        scrollDirection,
      } = useScrollDirection()
    useEffect(() => {
        AOS.init({ duration: 100 });
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
        const windowHeight = window.innerHeight;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let elData: any = elRef.current?.getBoundingClientRect();
        const positonY = elData?.top + elData?.height;
        
        // console.log(elRef.current?.getBoundingClientRect(), winScroll, windowHeight, positonY );
        // setTopOffset(positonY)
        if (isScrollingUp) {
            console.log("up")
            counter++;
            setTopOffset(topOffset + counter);
              
        } else if (isScrollingDown) {
            console.log("down")
            counter--;
            // setTopOffset(topOffset - counter);
        } 
       
        console.log(counter)
    };
   
    
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
                    className={`${className}__icon--frame`}>{isScrollingUp && "Up"}</div>
                <SVGAvatar style={{ 
                    top: ` ${isScrollingUp} ? ${topOffset} : 0`
                }} />
                <div  className={`${className}__icon--background`}>{isScrollingDown && "Down"}</div>
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
                CSS initiation level Allows me to build web applications for. I try to establish even alignment using shims. I use flexbox properties in my projects. I put visualized elements that are not important to the structure in pseudo-elements.
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