import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar(props) {
    const [toggle, setToggle] = React.useState(false);
    const [scroll, setScroll] = React.useState(false);
    const [scrollFar, setScrollFar] = React.useState(false);

    const navRef = React.useRef();
    const logoRef = React.useRef();
    navRef.current = scroll;
    logoRef.current = scrollFar;

    const items = ["About", "Experience", "Projects", "Contact"];

    React.useLayoutEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            const showFar = window.scrollY > 600;
            if (navRef.current !== show){
                setScroll(show);
            }
            if (logoRef.current !== showFar){
                setScrollFar(showFar);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    const ontoggleHandle = () => {
        setToggle(!toggle);
        if (toggle === false) {
          document.getElementById("body").classList.add("nav-open");
        } else {
          document.getElementById("body").classList.remove("nav-open");
        }
      };
    
    return (
        <>
            <div className={`navbar-wrapper ${scroll ? "nav-scroll" : ""}`}>
                <div
                    className={`hamburger ${toggle ? "toggle": ""}`}
                    onClick={ontoggleHandle}
                >
                    <div className={`line one`}></div>
                    <div className={`line two`}></div>
                    <div className={`line three`}></div>
                    <div className={`line four`}></div>
                </div>
                <div
                    className="px-md-5 p-4"
                    style={{ opacity: `${scrollFar ? 1 : 0}`, transition: "0.75s" }}
                >
                    <Link to="Home" spy={true} smooth={true} offset={-70} duration={1000}>
                        <span className="portfolio">PORTFOLIO</span>
                    </Link>
                </div>
                <ul className={`nav-links ${toggle ? "open" : ""}`}>
                <div
                    className={`hamburger ${toggle ? "toggle" : ""}`}
                    onClick={ontoggleHandle}
                >
                    <div className={`line one`}></div>
                    <div className={`line two`}></div>
                    <div className={`line three`}></div>
                    <div className={`line four`}></div>
                </div>
                    {items &&
                        items.map((item, index) => (
                            <>
                                <Link
                                    activeClass="active-navlink"
                                    to={item}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                >
                                    <li onClick={ontoggleHandle}>
                                        <span className="special">0{index + 1}. </span>
                                        {item}
                                    </li>
                                </Link>
                            </>
                        ))}

                </ul>

            </div>

        </>
    );

}
export default Navbar;