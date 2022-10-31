import React from "react";
import "../styles/Partners.css";

import coinbase from "../images/coinbase.png";
import kraken from "../images/kraken.png";
import binance from "../images/binance.png";
import bitbank from "../images/bitbank.png";

const Partners = () => {
    return (
        <div className="partners-container">
            <div className="container">
                <h2>POTENTIAL PARTNERS</h2>
                <div className="partners flex-start-center">
                    <img src={kraken} alt="kraken" />
                    <img src={bitbank} alt="bitbank" />
                    <img src={binance} alt="binance" />
                    <img src={kraken} alt="kraken" />
                    <img src={coinbase} alt="coinbase" />
                </div>
            </div>
        </div>
    );
};

export default Partners;
