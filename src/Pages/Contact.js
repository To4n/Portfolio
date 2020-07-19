import React from 'react';
import { Row, Col } from "react-bootstrap";
import 'aos/dist/aos.css';

function Contact(props) {
    const renderContact = () => (
        <div className="contact-portion text-center">
            <Row>
                <Col lg={{ span: 8, offset: 2 }} >
                    <h2>Contact Information</h2>
                    <p> I look forward to discussing opportunities with you!<br/> Feel free to email me at anytime!
                    </p>
                    <p>Phone: (214)-604-2132</p>
                    <p>Email: d.toandao@gmail.com</p>

                </Col>
            </Row>
        </div>


    );
    const renderMedia = () => (
        <ul className="list-inline contact-media-wrapper text-center">
            <li className=" git">
                <span>
                    <a href="https://www.linkedin.com/in/toan-d-dao/" target="_blank"><i className="fa fa-linkedin" ></i></a>
                </span>
            </li>
            <li className=" email">
                <span>
                    <a href="https://github.com/To4n" target="_blank"><i className="fa fa-github icon" ></i></a>
                </span>
            </li>
            <li className=" fb">
                <span>
                    <a href="https://www.facebook.com/d.Toandao" target="_blank"><i className="fa fa-facebook icon" ></i></a>
                </span>
            </li>

            <li className=" last">
                <span>
                    <a href="" target="_blank"><i className="fa fa-envelope-o icon" ></i></a>
                </span>
            </li>

        </ul>
    );
                                
                    return (
                    <div>
                            {renderContact()}
                            {renderMedia()}
                    </div>
                    
     );
}

export default Contact;