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

class ContactForm extends Component {
        state: ContactFormState = {
            email: "sss",
            name: "sss",
            message: "sss"
        }

    hendleChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;
        console.log(value)
        this.setState({
            [name]: value,
        })
        console.log(value)
    }

    handleSubmit = (e: any) => {
        console.log(e)
        e.preventDefault();
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
                <Email email={this.state.email} change={this.hendleChange}/>
                <Name name={this.state.name} change={this.hendleChange}/>
                <Message message={this.state.message} change={this.hendleChange}/>
                <Button buttonSubmit={this.handleSubmit}/>
            </form>
        )
    }
}

export default ContactForm;