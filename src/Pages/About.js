import React from "react";
import { useSpring, animated as a } from 'react-spring'
import { Row, Col } from "react-bootstrap";
import profile from '../assets/avatar.JPG'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About(props) {

    const renderProfile = () => (
        <div className="content ">
            <div className="text-center"><img src={profile} className="profile-image diamond-img shadow" /></div>
            <div className="type-writer">
            <p className="type text-center ">
                A front-end web developer with over 2 years of experience.
            </p>
            <p className="type text-center ">
                I have serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences.
            </p>
            </div>
        </div>

    );

    return (
        <div className="about-wrapper align-items-center ">
            <Row>
                <Col className="section-title mx-auto text-center" xs={{ offset: 3, span: 9 }} md={{ offset: 4, span: 8 }}>ABOUT ME</Col>

            </Row>
           
            <Row >
                <Col className="content-wrapper ">
                    {renderProfile()}
                </Col>
            </Row>
        </div>
    );
}
export default About;