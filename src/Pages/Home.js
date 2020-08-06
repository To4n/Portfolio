import React from "react";
import { Row, Col } from "react-bootstrap";
import Contact from './Contact';
import About from "./About";
import Skills from "./Skills";
import Projects from './Projects';
import { store } from "../Store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
//import profile from '../assets/profile.png';
import bg from '../assets/bg.jpg'
import bgphone from '../assets/bg-2.jpg'
import mountain from '../assets/mountain.png'
import road from '../assets/road.png'

function Home() {
    const homeRef = React.createRef();
    const aboutRef = React.createRef();
    const projectRef = React.createRef();
    const contactRef = React.createRef();
    const skillRef = React.createRef();
    const globalState = React.useContext(store);
    
    React.useEffect(() => {
        AOS.init({ duration: 700, delay: 100 });
        switch (globalState.state.refName) {
            case "homeRef":
                scrollToRef(homeRef);
                break;
            
            case "aboutRef":
                scrollToRef(aboutRef);
                break;
            
            case "projectRef":
                scrollToRef(projectRef);
                break;
            case "skillRef":
                scrollToRef(skillRef);
                break;
            
            case "contactRef":
                scrollToRef(contactRef);
                break;
                
            default:
                break;
        }

    }, [globalState.state]);
    const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

    const renderMedia = () => (
        <div className="ml-md-1 media-wrapper">
            <div className=" git">
                <span>
                    <a href="https://www.linkedin.com/in/toan-d-dao/" target="_blank"><i className="fa fa-linkedin" ></i></a>
                </span>
            </div>
            <div className=" email">
                <span>
                    <a href="https://github.com/To4n" target="_blank"><i className="fa fa-github icon" ></i></a>
                </span>
            </div>
            <div className=" fb">
                <span>
                    <a href="https://www.facebook.com/d.Toandao" target="_blank"><i className="fa fa-facebook icon" ></i></a>
                </span>
            </div>
               
            <div className=" last">
                <span>
                    <a href="" target="_blank"><i className="fa fa-envelope-o icon" ></i></a>
                </span>
            </div>
                    
        </div>
    );
    const renderHome = () => (
        <div>
        <div className="home-laptop">           
                              
                <div className="section align-item-center">
                    <img src={bg} id="bg" />
                    <img src={mountain} id="mountain" />
                    <img src={road} id="road" />
                <Row >
                    <Col md={{ span: 8, offset: 2 }}>
                    <h1  className="text hello-message-1 ">TOAN DAO </h1>
                    <p  className="text hello-message-2 ">Web Developer </p>

                    <div  className=" text-center">

                            <button className="btn btn-circle button-link " onClick={() => scrollToRef(aboutRef)}>
                                <i className="fa fa-angle-double-down animated"></i>
                        </button>
                        </div>
                    </Col>
                </Row>   

                    
                </div> 
        </div>
        <div className="home-phone">

            <div className="section align-item-center">
                <img src={bgphone} id="bgphone" />
                <Row >
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className="hello-message-1 ">TOAN DAO </h1>
                        <p className="hello-message-2 ">Web Developer </p>

                        <div className=" text-center">
                            <button className="btn btn-circle button-link " onClick={() => scrollToRef(aboutRef)}>
                                <i className="fa fa-angle-double-down animated"></i>
                            </button>
                        </div>
                    </Col>
                </Row>


            </div>
            </div>
        </div>
        
    );
    
    React.useEffect(() => {
        let bg = document.getElementById("bg");
        let mountain = document.getElementById("mountain");
        let road = document.getElementById("road");
        let text1 = document.getElementsByClassName("text")[0];
        let text2 = document.getElementsByClassName("text")[1];
        
        
        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text1.style.top = value * 1 + 'px';
            text2.style.top = value * 1 + 'px';
            
        });
        
    }, []);
    
    return (
        <div className="main-wrapper overflow-hidden">
            <Navbar />
            {renderMedia()}
           
            <div className="home-wrapper align-items-center" ref={homeRef}>
                {renderHome()}
                
            </div>
            <div ref={aboutRef} >
                <div data-aos="fade-down"><About /></div>
            </div>
            <div ref={skillRef} >
                <div data-aos="flip-up"><Skills /></div>
            </div>
            <div ref={projectRef} >
                <div data-aos="flip-up"><Projects /></div>
            </div>
            <div ref={contactRef} style={{ background: 'black' }}>
                <div data-aos="zoom-in"><Contact /></div>
            </div>

        </div>
    );
            

}
export default Home;
