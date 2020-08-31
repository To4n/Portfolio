import React from "react";
import { useSpring, animated as a } from 'react-spring'
import { Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import budget from '../assets/budget-app/three.png';
import aleph from '../assets/aleph/pic1.png';
function Projects(props){
    const renderProjects = () => (
        <div className="project-showcase">
            <Row>
                <div className="project-title">Projects</div>
            </Row>
            <div className=" project-container text-center">
            <Row>
                <Col lg={4} sm={6} className=" text-center ">
                    <div className="project-name">Expensify</div>
                    <div className="gallery  ">
                        <a href="http://expensify-budget-app.s3-website.us-east-2.amazonaws.com/" target="_blank">
                            <img src={budget}  className="img-responsive" alt="budget-app"/>
                            <div className="project-caption">React, Bootstrap, Firebase</div>
                        </a>
                    </div>
                </Col>
                <Col lg={4} sm={6} className=" text-center ">
                    <div className="project-name">Aleph-technologies.com</div>
                    <div className="gallery  ">
                        <a href="https://aleph-technologies.com/" target="_blank">
                            <img src={aleph}  className="img-responsive" alt="aleph-technologies"/>
                            <div className="project-caption">React, Bootstrap, Javascript</div>
                        </a>
                    </div>
                </Col>
                

            </Row>
            </div>
        

        </div>

    );
    return (
        <div>
            {renderProjects()}
        </div>
        )

}

export default Projects;