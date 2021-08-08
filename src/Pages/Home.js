import React from "react";
import Hero from './Hero';
import Contact from './Contact';
import About from "./About";
import Projects from './Projects';
import Constants from "../Constants";
import Navbar from './Navbar';
import Experience from "./Experience";
function Home() {
    const media = Constants.media;

    const renderMedia = () => (
        <div
          className='media-wrapper'
          data-aos='fade-up'
          data-aos-delay='2500'
          data-aos-once='true'>
          {media &&
            media.map((item, i) => (
              <div className='ml-md-5' key={i}>
                <span>
                  <a href={item.link} target='_blank' rel="noopener noreferrer">
                    <i className={item.icon}></i>
                  </a>
                </span>
              </div>
            ))}
        </div>
      );
    return (
        <>
            <Navbar />
            <div className="main-wrapper overflow-hidden">
                <div className="home-wrapper" id="Home">
                    <Hero />
                    {renderMedia()}
                </div>
                <div id="About">
                    <div
                        className='section-title mb-4'
                        data-aos='fade-up'
                        data-aos-delay='150'
                        data-aos-once='true'
                        data-aos-duration='500'>
                        <div className='wrapper mb-5 mb-lg-0'>
                        <span className='highlight-text'>01.</span>About Me
                        </div>
                    </div>
                    <About />
                </div>
                <div id='Experience'>
                    <div
                        className='section-title mb-4'
                        data-aos='fade-up'
                        data-aos-delay='150'
                        data-aos-once='true'
                        data-aos-duration='500'>
                        <div className='wrapper mb-5 mb-lg-0'>
                        <span className='highlight-text'>02.</span>Experience
                        </div>
                    </div>
                    <Experience />
                </div>
                <div id='Projects'>
                    <div
                        className='section-title mb-4'
                        data-aos='fade-up'
                        data-aos-delay='150'
                        data-aos-once='true'
                        data-aos-duration='500'>
                        <div className='wrapper mb-5 mb-lg-0'>
                        <span className='highlight-text'>02.</span>Projects
                        </div>
                    </div>
                    <Projects />
                </div>
                <div id='Contact'>
                    <div
                        className='section-title mb-4'
                        data-aos='fade-up'
                        data-aos-delay='150'
                        data-aos-once='true'
                        data-aos-duration='500'>
                        <div className='wrapper mb-5 mb-lg-0'>
                        <span className='highlight-text'>04.</span>Contact me
                        </div>
                    </div>
                    <Contact />
                </div>
            </div>

        </>
    );
            

}
export default Home;
