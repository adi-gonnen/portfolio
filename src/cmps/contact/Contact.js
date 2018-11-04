import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <h3>You can either contact me via Linkedin or give me a call:</h3>
                <div className="contact-list flex column">
                    <div className="link-container flex">
                        <a className="link-icon" href="https://www.linkedin.com/in/adi-gonnen/" target="_new">
                            <i className="fab fa-linkedin"></i>
                        </a> 
                        <a className="link" href="https://www.linkedin.com/in/adi-gonnen/" target="_new">
                            <p>www.linkedin.com/in/adi-gonnen</p>
                        </a> 
                    </div>
                    <div className="phone-container flex">
                        <div className="phone-icon">
                            <i className="fas fa-phone"></i>
                            <a href="tel:+972546768418" />    
                        </div>
                        <p className="phone">
                            054-6768418
                            <a href="tel:+972546768418" />
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact;