import React from "react";
import "../styles/Hero.css";

import twitter from "../images/twitterw.png";

import telegram from "../images/telegramw.png";

import animation from "../images/animation.png";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="container">
                <div className="hero-wrap flex-between-center">
                    <div className="hero-left">
                        <h1>Colloquium DAO - Pushing the boundaries of web3</h1>
                        <p>
                            Colloquium is a DAO guided by reknown educators and
                            innovators in the space to create something
                            revolutionary.{" "}
                        </p>
                        <a href="#" className="purpleBtn">
                            Cooming Soon
                        </a>
                    </div>
                    <div className="hero-right">
                        <div className="animation">
                            <img src={animation} alt="" />
                        </div>
                    </div>
                </div>

                <div className="social-media ">
                    <a href="#">
                        <img src={telegram} alt="Treehouse Icon" />
                    </a>

                    <a href="#">
                        <img src={twitter} alt="twitter Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
