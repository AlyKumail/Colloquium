import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";

import twitter from "../images/twitterw.png";

import telegram from "../images/telegramw.png";

import animation from "../images/herogif3.gif";
import animationVid from "../images/herogif.mov";

const Hero = () => {
    const vid = useRef();
    useEffect(() => {
        console.log(vid.current);
        // vid.current.play();
    }, []);
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

                            {/* <video
                                ref={vid}
                                width="620"
                                height="640"
                                playsInline
                                autoPlay
                                muted
                                loop
                                controls
                            >
                                <source src={animationVid} type="video/mp4" />
                            </video> */}
                        </div>
                    </div>
                </div>

                <div className="social-media ">
                    <a href="https://t.me/colloquiumdao">
                        <img src={telegram} alt="Treehouse Icon" />
                    </a>

                    <a href="https://twitter.com/colloquiumdao/status/1587141687192731649?s=46&t=KGeemDh07b7mQGU4ybdZuw">
                        <img src={twitter} alt="twitter Icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
