import React from "react";
import "../styles/Footer.css";

import twitter from "../images/twitterw.png";

import logo from "../images/logo.png";

import Cube from "../images/Cube.png";
import telegram from "../images/telegramw.png";

const Footer = () => {
    return (
        <div className="footer-container" id="footerPart">
            <div className="container flex-between-center">
                <div className="footer-left">
                    <h2>
                        An exclusive DAO focused on pushing the boundaries of
                        web3
                    </h2>
                    <div className="social-media ">
                        <a href="https://t.me/colloquiumdao">
                            <img src={telegram} alt="Treehouse Icon" />
                        </a>

                        <a href="https://twitter.com/colloquiumdao/status/1587141687192731649?s=46&t=KGeemDh07b7mQGU4ybdZuw">
                            <img src={twitter} alt="twitter Icon" />
                        </a>
                    </div>

                    <div className="border-line"></div>
                    <div className="site-rights flex-between-center">
                        <img src={logo} alt="" />
                        <div className="rights-terms">
                            <p className="footer-description">
                                For partnerships and business inquiries, you can
                                shoot an email to colloquiumtoken@proton.me, or
                                you can reach me through our telegram.
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
