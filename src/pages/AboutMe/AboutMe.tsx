import { useState, useEffect } from 'react'
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';

import { ReactComponent as SVGAvatar } from '../../svg/avatar.svg';
import { ReactComponent as Exclamation } from '../../svg/error.svg';
import {ReactComponent as Description} from '../../svg/description.svg'

import './index.sass';

type IsVisible = boolean;
type Height = number;

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState<IsVisible>(true);
    const [height, setHeight] = useState<Height>(0)
    
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
         window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
      let heightToHideFrom = 400;
      const winScroll = document.body.scrollTop || 
          document.documentElement.scrollTop;
      setHeight(winScroll);
  
      if (winScroll > heightToHideFrom) {  
           isVisible && setIsVisible(false);
      } else {
           setIsVisible(true);
      }  
    };
    
    const handleClick = () => {
        console.log(height)
    }

    console.log(height, isVisible)
    const className = "section"
    return (
        <section
            className={className}
            id="aboutMe">
            <h2
                className={`${className}__header`}>/ About me</h2>
            <div
                className={isVisible ? `${className}__icon animate` : `${className}__icon`}>
                <SVGAvatar />
            </div>
            <h3
                className={`${className}__text`}>
                My name is Emilia, and I am a Frontend Developer.
                </h3>
            <p className={`${className}__text--secondary`}>
                CSS initiation level Allows me to build web applications for. I try to establish even alignment using shims. I use flexbox properties in my projects. I put visualized elements that are not important to the structure in pseudo-elements.
            </p>
            <ButtonWithIcon
                className="aboutMe"
                icon={<Exclamation />}
                onClick={handleClick}>
                Contact Me
            </ButtonWithIcon>
            <ButtonWithIcon
                className="aboutMe"
                icon={<Description />}
                onClick={handleClick}>
                My resume
            </ButtonWithIcon>
        </section>
    )
}

export default AboutMe