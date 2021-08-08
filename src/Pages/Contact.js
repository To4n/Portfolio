import React from "react";
import Constants from '../Constants';

import ContactForm from '../utils/ContactForm';

function Contact(props) {
    const media = Constants.media;
    return (
        <div className="contact-wrapper">
            <div className="phone">Phone: 214-604-2132</div>
            <div className="email">Email: d.toandao@gmail.com</div>
            <div className="quote">
                I am available for hire and open to any ideas of cooperation.
                </div>
            <div className="overflow-hidden">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;