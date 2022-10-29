import React from "react";
import "../styles/Hero.css";

import twitter from "../images/twitter.png";
import orkut from "../images/orkut.png";
import picasa from "../images/picasa.png";
import treehouse from "../images/treehouse.png";
import animation from "../images/animation.png";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="container">
                <h1>
                    Colloquium DAO - <br></br> Pushing the boundaries of web3
                    <div className="animation">
                        <img src={animation} alt="" />
                    </div>
                    <div className="social-media flex-between-center">
                        <img src={treehouse} alt="Treehouse Icon" />
                        <img src={orkut} alt="Orkut Icon" />
                        <img src={picasa} alt="picasa Icon" />
                        <img src={twitter} alt="twitter Icon" />
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
