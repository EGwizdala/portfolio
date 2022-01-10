import React from 'react';
import ContactData from '../components/ContactData'
import { ReactComponent as SVGPhone } from '../svg/phone.svg';
import { ReactComponent as SVGMail } from '../svg/mail.svg';
import { ReactComponent as SVGGithub } from '../svg/github.svg';
import { ReactComponent as SVGLinkedIn } from '../svg/linkedin.svg';
import ContactForm from './ContactForm'
import '../styles/ContactMe.sass'



const ContactMe = () => {
    let key: number = 0;
    const contactElements: {icon: JSX.Element, data:string}[]  = [
        {
            icon: <SVGPhone />,
            data: "(+48) 691 195 153",
        },
        {
            icon: <SVGMail />,
            data: "emilia.gwidala@gmail.com",
        },
        {
            icon: <SVGGithub />,
            data: "github.com/EGwizdala",
        },
        {
            icon: <SVGLinkedIn />,
            data: "linkedin.com/in/emiliagwizdala",
        }
    ];

    const contacts = contactElements.map(contact => {
        key++;
        return (
            <ContactData key={key} icon={contact.icon} data={contact.data}/>
       )
    })
    return (
        <section className = "section--contact">
            <h2 className = "section--contact__header">/ Contact me</h2>
            <p className = "section--contact__text--secondary"> I am looking for a full-time or part-time job, so if you are interested in getting to know me a little more, please contact me or use the form.</p>
            <ul className = "section--contact__contact--data">{contacts}</ul>
            <ContactForm  className ="section--contact__contact--data"/>
        </section>
     );
}
 
export default ContactMe ;