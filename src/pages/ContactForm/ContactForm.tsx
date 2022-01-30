import React, { Component } from "react";

import Input from '../../components/Input';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';

import { ReactComponent as Send } from '../../svg/send.svg';

import './index.sass';


type ContactFormProps= {
    className: string
}
interface ContactFormState{
    email: string;
    name: string;
    message: string;
}

class ContactForm extends Component<ContactFormProps> {
        state: ContactFormState = {
            email: "",
            name: "",
            message: ""
        }

    handleOnChange = (e: React.FormEvent<EventTarget>): void => {
        const event = e.target as HTMLInputElement;
        const value = event.value;
        const name = event.name;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        this.setState({
            email: "",
            name: "",
            message: ""
        })
    }

    handleClick = () => {
        console.log("KLIK")
    }
    
    render() {
        const { className } = this.props;
        const { email, name, message } = this.state;
        const formElementClassName = "form-element"
        return (
            <form className={className}>
                <Input value={email} change={this.handleOnChange} className={formElementClassName} inputType="email" placeholder="Email" />
                <Input value={name} change={this.handleOnChange} className={formElementClassName} inputType="name" placeholder="Name" />
                <Input value={message} change={this.handleOnChange} className = {formElementClassName} inputType= "message" placeholder = "Send us an message!" />
                <ButtonWithIcon className={formElementClassName} icon={<Send/>} onClick={this.handleClick}>Send!</ButtonWithIcon>
            </form>
        )
    }
}

export default ContactForm;