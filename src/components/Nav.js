import React, { useRef, useState } from "react";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import "../styles/Nav.css";

const Nav = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const mobileNav = useRef();
    const handleHamburger = () => {
        if (!isMobileOpen) {
            mobileNav.current.style.display = "flex";
            mobileNav.current.style.opacity = "1";
            setIsMobileOpen(true);
        } else {
            mobileNav.current.style.display = "none";
            mobileNav.current.style.opacity = "0";

            setIsMobileOpen(false);
        }
    };
    return (
        <div className="nav-container">
            <div ref={mobileNav} className="mobileNav">
                <img src={logo} alt="" />

                <ul className="">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Tokenomics</a>
                    </li>
                    <li>
                        <a href="#">Social</a>
                    </li>
                </ul>
                <a href="#" className="purpleBtn">
                    Join Telegram
                </a>
            </div>
            <div className="container flex-between-center">
                <img
                    onClick={handleHamburger}
                    className="hamburger"
                    src={hamburger}
                    alt=""
                />

                <div className="nav-left">
                    <img src={logo} alt="" />
                </div>
                <div id="navbar" className="nav-right flex-between-center">
                    <ul className=" flex-between-center">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Tokenomics</a>
                        </li>
                        <li>
                            <a href="#">Social</a>
                        </li>
                    </ul>
                    <a href="#" className="purpleBtn">
                        Join Telegram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
