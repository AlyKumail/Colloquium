import React from "react";
import logo from "../images/logo.png";
import "../styles/Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="container flex-between-center">
                <div className="nav-left">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-right flex-between-center">
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
                        Join Telegran
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
