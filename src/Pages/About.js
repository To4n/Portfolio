import React from "react";
import { Row, Col} from "react-bootstrap";
import profile from '../assets/profile.webp'
import Constants from "../Constants";
function About(props) {
    const skills = Constants.skils;


      const renderProfile = () => (
        <div className='image-wrapper'>
          <img src={profile} className='profile-image diamond-img shadow' alt="profile"/>
        </div>
      );
    
      const renderOffer = () => (
        <div className='my-5'>
          <p>Hi there! I'm Toan, a software engineer in Dallas, TX</p>
          <p>
            I have graduated from the University of Texas Dallas majoring in Computer Science in 2020.
            
            Since then, I have worked for Aperia Solutions as a front-end developer
            for Fiserv where I have hand-on experiences with 
            various types of projects that provides financial technology services to clients 
            across the financial services sector
            
          </p>
        </div>
      );
    
      const renderSkillSet = () => (
        <div className='skill-set'>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill.name}</li>)}
          </ul>
        </div>
      );
      return (
        <>
          <div>
            <Row
              className='content-wrapper'
              data-aos='fade-up'
              data-aos-delay='150'
              data-aos-once='true'
              data-aos-duration='500'>
              <Col xs={{order: 2, span: 12}} lg={{order: 1, span: 7}}>
                {renderOffer()}
              </Col>
              <Col xs={{order: 1, span: 12}} lg={{order: 2, span: 5}}>
                {renderProfile()}
              </Col>
            </Row>
            <Row
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-duration='1500'>
              <Col xs={12} lg={5}>
                {renderSkillSet()}
              </Col>
            </Row>
          </div>
        </>
      );
}
export default About;