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
            <div className="mt-3 text-center">
                <span className="bold">A </span>
                <span className="hightlight">front-end web developer</span>
                <span className="bold"> with over </span>
                <span className="hightlight">2 years of experience.</span>
            </div>
            <div className="text-center">
                I have serious passion for UI effects, animations and creating intuitive,
                dynamic user experiences.
            </div>
        </div>

    );

    return (
        <div className="about-wrapper align-items-center ">
            <Row>
                <Col className="section-title mx-auto text-center" xs={{ offset: 3, span: 9 }} md={{ offset: 4, span: 8 }}>About me</Col>

            </Row>
           
            <Row xs={{ offset: 2, span: 10 }} md={{ offset: 4, span: 8 }} className="content-wrapper">
                <Col xs={12} xl={12}>
                    {renderProfile()}
                </Col>
            </Row>
        </div>
    );
}
export default About;