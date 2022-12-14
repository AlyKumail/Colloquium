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
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#tokenomics">Tokenomics</a>
                    </li>
                    <li>
                        <a href="#footerPart">Social</a>
                    </li>
                </ul>
                <a href="https://t.me/colloquiumdao" className="purpleBtn">
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

                <ul id="navbar" className="flex-between-center">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#tokenomics">Tokenomics</a>
                    </li>
                    <li>
                        <a href="#footerPart">Social</a>
                    </li>
                </ul>
                <div id="navBtn">
                    <a href="https://t.me/colloquiumdao" className="purpleBtn">
                        Join Telegram
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
