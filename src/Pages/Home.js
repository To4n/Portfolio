import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {


    renderMedia() {
        return (
        <div className="media-wrapper">
            <div className="ml-md-5 git">
                <span>
                        <a href="#" target="_blank"><i className="fa fa-linkedin" ></i></a>
                </span>
            </div>
            <div className="ml-md-5 email">
                <span>
                    <a href="#" target="_blank"><i className="fa fa-github icon" ></i></a>
                </span>
            </div>
            <div className="ml-md-5 fb">
                <span>
                    <a href="#" target="_blank"><i className="fa fa-facebook icon" ></i></a>
                </span>
            </div>
            <div className="ml-md-5 last">
                <span>
                    <a href="#" target="_blank"><i className="fa fa-instagram icon" ></i></a>
                </span>
            </div>
            </div>
        )

    }

    renderHome() {
        return (
            <div className="w-100">
                <Row>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="p-md-5 p-4 w-100">
                            <div className="hello-message-1 text-white">Hi, I'm Toan Dao,</div>
                            <div className="hello-message-2 text-white"> a web developer specialized in</div>
                            <div className="hello-message-3">front-end development.</div>
                            <div className="text-center mt-5">
                                <button className="button-link link-2" >
                                    <span>View My Work</span>
                                    <span className="ml-3"><i className="fa fa-long-arrow-right rotate-arrow" aria-hidden="true"></i></span>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            
            )

    }


    render() {
        return (<div className="main-wrapper overflow-hidden">
            {this.renderMedia()}
                <div>
                {this.renderHome()}
                </div>
            </div>);

    }


}

export default Home;