import React from "react";
import { Row, Col } from "react-bootstrap";
//import Contact from './Contact';
import About from "./About";
import Skills from "./Skills";
import Projects from './Projects';
import { store } from "../Store";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
//import profile from '../assets/profile.png';
import bg from '../assets/bg.jpg'
import moon from '../assets/moon.png'
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
            /*
            case "contactRef":
                scrollToRef(contactRef);
                break;
                */
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
        <div className="">
            
               
                
                <div className="section align-item-center">
                    <img src={bg} id="bg" />
                    <img src={moon} id="moon" />
                    <img src={mountain} id="mountain" />
                    <img src={road} id="road" />
                <Row >
                    <Col xs={{offset:2,span:10}} md={{ offset: 4, span: 8 }} className="text hello-message-1 text-white">Hi, I'm Toan, </Col>
                    <Col xs={{ offset: 2, span: 10 }} md={{ offset: 4, span: 8 }} className="text hello-message-2 text-white">a web developer specialized in </Col>
                    <Col xs={{ offset: 2, span: 10 }} md={{ offset: 4, span: 8 }} className="text hello-message-3 ">front-end development.</Col>
                    <Col xs={{ offset: 2, span: 10 }} md={{ offset: 4, span: 8 }} className=" text-center">

                        <button  className="button-link " onClick={() => scrollToRef(projectRef)}>
                        <span>View My Work</span>
                        <span className="ml-3"><i class="fa fa-long-arrow-right rotate-arrow" aria-hidden="true"></i></span>
                        </button>
                    </Col>
                </Row>   

                    
                </div>
                
                
                
                    
            
        </div>
        
    );

    React.useEffect(() => {
        let bg = document.getElementById("bg");
        let moon = document.getElementById("moon");
        let mountain = document.getElementById("mountain");
        let road = document.getElementById("road");
        let text1 = document.getElementsByClassName("text")[0];
        let text2 = document.getElementsByClassName("text")[1];
        let text3 = document.getElementsByClassName("text")[2];
        

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            moon.style.left = -value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text1.style.top = value * 1 + 'px';
            text2.style.top = value * 1 + 'px';
            text3.style.top = value * 1 + 'px';
           
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
            

        </div>
    );
            /*
            <div ref={aboutRef} style={{ background: 'black' }}>
                <div data-aos="flip-up"><About /></div>
            </div>
            /*
            <div ref={projectRef} className="bg-white">
                <div data-aos="fade"><Projects /></div>
            </div>
            <div ref={contactRef} className="bg-white">
                <div data-aos="zoom-in"><Contact /></div>
            </div>

     */

}
export default Home;