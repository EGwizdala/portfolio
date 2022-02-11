import React from 'react';
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface SectionWithIconProps {
    icon: React.ReactNode;
    text: string | React.ReactNode;
    classNameIcon: string;
    aosIcon?: string
    aosText?: string
    style?: any
   
}

const SectionWithIcon: React.FC<SectionWithIconProps> = ({ icon, text, classNameIcon, aosIcon, aosText, style }) => {

    useEffect(() => {
        AOS.init({ duration: 100 }); 
     
    }, [])

   
    return (
        <>
            <div
                style ={style}
                data-aos={aosIcon}
                // data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="linear"
              
                // data-aos-anchor-placement="top-center"
               className = {classNameIcon}>{icon}</div>
            <p
                data-aos={aosText}
                 data-aos-delay="1000"
                 data-aos-duration="1000"
                 data-aos-easing="linear"

                className={`${classNameIcon}__text`}>{text}</p>
        </>
    )
}

export default SectionWithIcon;
