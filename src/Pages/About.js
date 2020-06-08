import { useSpring, animated as a } from 'react-spring'
import { Row, Col } from "react-bootstrap";
import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import profile from '.../assets/avatar.jpg'

class About extends Component{
    renderProfile() {
        return (
            <div className="content px-3 px-md-5">
                
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
            )

    }

    render() {
        return (<div className="about-wrapper d-flex align-items-center p-md-5 p-3 mb-md-5">
            {this.renderProfile()}
            </div>
            );

    }

}
export default About;