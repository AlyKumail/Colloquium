import React from "react";
import "../styles/Footer.css";

import twitter from "../images/twitter.png";
import orkut from "../images/orkut.png";
import picasa from "../images/picasa.png";
import treehouse from "../images/treehouse.png";
import animation from "../images/animation.png";
import logo from "../images/logo.png";
import github from "../images/github.png";
import Cube from "../images/Cube.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container flex-between-center">
                <div className="footer-left">
                    <h2>
                        An exclusive DAO focused on pushing the boundaries of
                        web3
                    </h2>
                    <div className="social-media ">
                        <img src={treehouse} alt="Treehouse Icon" />
                        <img src={orkut} alt="Orkut Icon" />
                        <img src={picasa} alt="picasa Icon" />
                        <img src={twitter} alt="twitter Icon" />
                        <img src={github} alt="github Icon" />
                    </div>
                    <div className="border-line"></div>
                    <div className="site-rights flex-between-center">
                        <img src={logo} alt="" />
                        <div className="rights-terms">
                            <p className="footer-description">
                                Aliquam pulvinar vestibulum blandit. Donec sed
                                nisl libero. Fusce dignissim luctus sem eu
                                dapibus. Pellentesque vulputate quam a quam
                                volutpat.
                            </p>
                            <p className="copyright">
                                {" "}
                                Copyright 2022. All Right Reserved.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <img src={Cube} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
