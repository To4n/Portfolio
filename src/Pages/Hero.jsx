import React from 'react';
import bg from '../assets/star.webp'
import mountain from '../assets/mountain.webp'
import road from '../assets/road.webp'

function Hero(props){
    React.useEffect(() => {
        const bg = document.getElementById("bg");
        const mountain = document.getElementById("mountain");
        const road = document.getElementById("road");
        const text1 = document.getElementsByClassName("text")[0];
        const text2 = document.getElementsByClassName("text")[1];
        const handleScroll = () => {
            var value = window.scrollY;
            bg.style.top = value * 0.5 + 'px';
            mountain.style.top = -value * 0.15 + 'px';
            road.style.top = value * 0.15 + 'px';
            text1.style.top = value * 1 + 'px';
            text2.style.top = value * 1 + 'px';
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div
                className="banner"
            >
                <div className="section align-item-center">
                    <div>
                    <img src={bg} id="bg" alt="background"/>
                    <img src={mountain} id="mountain" alt="mountain"/>
                    <img src={road} id="road" alt="road"/>
                    </div>
                    <h1  className="text hello-message-1 ">TOAN DAO |</h1>
                    <p  className="text hello-message-2 ">Software Engineer</p>
                </div>
                
            </div>
        </>
    )
}
export default Hero;