import React from "react";
import "../styles/Tokenomics.css";
import tokenomics from "../images/tokenomics.png";

const Tokenomics = () => {
    return (
        <div className="tokenomics-container" id="tokenomics">
            <div className="container flex-between-center">
                <div className="tokenomics-left">
                    <h2>TOKENOMICS</h2>
                    <h3>8.5% sell tax</h3>
                    <div className="stats flex-center-center">
                        <div className="stat lightpink">
                            <h4>LP</h4>
                            <p>2%</p>
                        </div>
                        <div className="stat pink">
                            <h4>BURN</h4>
                            <p>2%</p>
                        </div>
                        <div className="stat darkpink">
                            <h4>DAO TREASURY</h4>
                            <p>4.5%</p>
                        </div>
                    </div>
                </div>
                <div className="tokenomics-right">
                    <img src={tokenomics} alt="" />
                    <p>As price rises, Taxes decrease, rewarding holders </p>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
