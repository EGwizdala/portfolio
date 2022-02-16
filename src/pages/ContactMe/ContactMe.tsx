import React from 'react';

import SectionWithIcon from '../../components/SectionWithIcon';
import {Link} from '../../components/Link';
import { ReactComponent as SVGPhone } from '../../svg/phone.svg';
import { ReactComponent as SVGMail } from '../../svg/mail.svg';
import { ReactComponent as SVGGithub } from '../../svg/github.svg';
import { ReactComponent as SVGLinkedIn } from '../../svg/linkedin.svg';

import img from '../../images/conact.jpg'

import './index.sass';

const ContactMe = () => {
    
    const contactElements: {icon: JSX.Element, data:string, href: string}[]  = [
        {
            icon: <SVGPhone />,
            data: "(+48) 691 195 153",
            href: "tel: +48-691-195-153"
        },
        {
            icon: <SVGMail />,
            data: "emilia.gwidala@gmail.com",
            href: "mailto:emilia.gwidala@gmail.com"
        },
        {
            icon: <SVGGithub />,
            data: "github.com/EGwizdala",
            href: "https://github.com/EGwizdala"
        },
        {
            icon: <SVGLinkedIn />,
            data: "linkedin.com/in/emiliagwizdala",
            href: "https://www.linkedin.com/in/emiliagwizdala/"
        }
    ];

   
    const contacts = contactElements.map(contact => {
        return (
           <div 
                className="data-container"><SectionWithIcon key={contact.data} icon={contact.icon} text={<Link href = {contact.href}>{ contact.data}</Link>} classNameIcon="data" />
           </div>
       )
    })
    const className = "section-contact"
    return (
        <section
            id="contactMe"
            className={className}>
            <h2
                className={`${className}__header`}>
                / Contact me
            </h2>
            <p 
                className={`${className}__text`}>
                I am looking for a full-time or part-time job, so if you are interested in getting to know me a little more, please contact me or use the form.
            </p>
            <ul
                className={`${className}__data`}>
                {contacts}
            </ul>
            <div className={`${className}__img`}>
                <img src={img} alt="emali message" />
                <a href="http://www.freepik.com" >Designed by slidesgo / Freepik</a>
            </div>
            
        </section>
     );
}
 
export default ContactMe ;