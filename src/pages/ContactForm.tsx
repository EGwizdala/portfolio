import React, { Component } from "react";
import Email from '../components/Email';
import Name from '../components/Name';
import Message from '../components/Message';
import Button from '../components/Button'


interface ContactFormProps {

}
interface ContactFormState{
    email: string;
    name: string;
    message: string;
}

interface FormElements extends HTMLFormControlsCollection {
    usernameInput: HTMLInputElement
  }
interface UsernameFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

class ContactForm extends Component {
        state: ContactFormState = {
            email: "sss",
            name: "sss",
            message: "sss"
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
        console.log(e)
        e.preventDefault();
        const form = e.currentTarget;
        console.log("submit");
        this.setState({
            email: "",
            name: "",
            message: ""
        })
    }
    
    render() {
        return (
            <form>
                <Email email={this.state.email} change={this.handleOnChange}/>
                <Name name={this.state.name} onChange={this.handleOnChange}/>
                <Message message={this.state.message} onChange={this.handleOnChange}/>
                <Button buttonSubmit={this.handleSubmit}/>
            </form>
        )
    }
}

export default ContactForm;