import React from 'react'
import * as emailjs from "emailjs-com";
import './contact.style.css'
import Swal from 'sweetalert2';
import { Input } from "semantic-ui-react";

const SERVICE_ID = "service_7ing9hi";
const TEMPLATE_ID = "template_cq899ev";
const USER_ID = "user_MgUIWcsi1jH4DWOrLSNHx";

const ContactComponent = () => {
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully',
                    color: '#fff',
                    background: '#101010'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon : 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
            e.target.reset()
    }
    
        return <div>
            <form className="ui form" onSubmit={handleOnSubmit}>
                <input 
                    id="name"
                    name="user_name"
                    control={Input}
                    placeholder="Your Name"
                    required
                    rows={1}
                />

                <input 
                    id="email"
                    name="user_email"
                    control={Input}
                    placeholder="Your Email Address"
                    required
                    // error={this.state.errors.email}
                    rows={1}
                />

                <textarea 
                    id="feedback"
                    name="user_message"
                    control={Input}
                    placeholder="What would you like to chat about?"
                    required
                />

                <button >
                    Send Message
                </button>
            </form>
        </div>
}
 
export default ContactComponent;