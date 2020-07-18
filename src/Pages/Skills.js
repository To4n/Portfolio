import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import 'aos/dist/aos.css';
import html from '../assets/HTML5.png';
import javascript from '../assets/JavaScript-logo.png';
import mysql from '../assets/mysql-icon.png';
import css3 from '../assets/css3-original.svg';
import react from '../assets/react-logo.png';
import node from '../assets/Node.svg';
import bg from '../assets/bg.jpg';
function Skills(props) {
    const renderSkills = () => (
        <div className="download-section">
            
            <img className="skill-background" src={bg} id="bg" alt="background" />
            <Row>
                <div className="skills-title">SKILLS</div>
            </Row>
            <Row className="justify-content-around text-center">
                
                    
                        <Col lg={3} md={6} className="skill text-center ">
                            <div className="service-box">
                                <i className="sr-icon">
                                    <img className="sr-logo" src={html} alt="html" />
                                </i>
                                <h3>HTML</h3>
                            </div>
                         </Col>
                        <Col lg={3} md={6} className="skill text-center">
                            <div className="service-box">
                                <i className="sr-icon">
                                    <img className="sr-logo" src={css3} alt="css" />
                                </i>
                                <h3>CSS</h3>
                            </div>
                        </Col>
                    
                    
                    <Col lg={3} md={6} className="skill text-center">
                            <div className="service-box">
                                <i className="sr-icon">
                                    <img className="sr-logo" src={javascript} alt="javascript" />
                                </i>
                                <h3>JAVASCRIPT</h3>
                            </div>    
                        </Col>
                    <Col lg={3} md={6} className="skill text-center">
                            <div className="service-box">
                                <i className="sr-icon">
                                    <img className="sr-logo" src={react} alt="react" />
                                </i>
                                <h3>REACT</h3>
                            </div>
                        </Col>
                    
                    
                    <Col lg={3} md={6} className="skill text-center">
                            <div className="service-box">
                                <i className="sr-icon">
                                    <img className="sr-logo" src={node} alt="node" />
                                </i>
                                <h3>NODE.JS</h3>
                            </div>
                        </Col>
                    <Col lg={3} md={6} className="skill text-center">
                            <div className="service-box">
                                <i className="sr-icon">
                                    <img className="sr-logo" src={mysql} alt="mysql" />
                                </i>
                                <h3>MYSQL</h3>
                            </div>
                        </Col>
                     
                
            </Row>
        </div>        
        );
    React.useEffect(() => {
        let bg = document.getElementById("bg");
        
        

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            
            
        });

    }, []);

    
    return (
        <div>
            {renderSkills()}
        </div>
    );
}

export default Skills;