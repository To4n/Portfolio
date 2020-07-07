import React from 'react';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card(props) {
    AOS.init({ duration: 300, delay: 50 });
    return (
        <div className="card p-4" style={{ backgroundImage: `url(${props.project.photo})` }} data-aos='zoom-out'>
            <div className="card-content" style={{}}>
                <div>
                    <div className="project-name text-center">{props.project.name}</div>
                    <div className="project-tech text-center mb-5">{props.project.tech}</div>
                    <div className="mt-5 text-center">
                        <Link to={props.project.link}><button className="project-button">Learn More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;