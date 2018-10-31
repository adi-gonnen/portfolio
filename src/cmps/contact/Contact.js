import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css';

class Contact extends Component {
    // state = {
    //     subject: '',
    //     message: '',
    //     email: ''
    // };
    // submitContact = (ev) => {
    //     // var subject = document.getElementById("subject").value;
    //     // var message = document.getElementById("message").value;
    // //    window.location = (`https://mail.google.com/mail/?view=cm&fs=1&to=adigonnen@gmail.com&su=${subject}&body=${message}`,"_blank");
    // }
    // handleSubject = (ev) => {
    //     const newSubject = this.state.subject;
    //     newSubject = ev.target.value;
    //     this.setState({subject: newSubject});
    // }
    showPhone =() => {
        document.querySelector('.phone-num').classList.toggle('hide');
    }
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <p>You can either contact me via Linkedin or give me a call:</p>
                {/* <div className="section-contact" id="form">
                     <form method="post" action=`mailto:adigonnen@gmail.com?subject=${this.state.subject}&message=${this.state.message}`>
                        <h5>Contact Me</h5>
                        <div className="form-group">
                             <input type="text" className="form-control" id="email" name="email" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" type="textarea" id="message" placeholder="Message" maxlength="140" rows="7"></textarea>
                        </div>
                        <button type="button" id="submit" name="submit" className="btn btn-primary pull-right" onclick="submitContact(event)">Submit</button>
                    </form> 
                </div> */}
                <div className="contact-list flex">
                    <div className="link">
                        <a className="link" href="https://www.linkedin.com/in/adi-gonnen/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a> 
                    </div>
                    <div class="phone" onClick={this.showPhone}>
                        {/* <FontAwesomeIcon icon="phone"/> */}
                        <i class="fas fa-phone"></i>
                    </div>
                </div>
                <p className="phone-num hide">
                    054-6768418
                    <a href="tel:+972546768418" />    
                </p>
            </div>
        )
    }
}
export default Contact;