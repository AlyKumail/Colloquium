import React from "react";
import "../styles/TokenInfo.css";

const TokenInfo = () => {
    return (
        <div className="tokenInfo-container">
            <div className="container flex-between-center">
                <div className="tokenInfo-item">
                    <h3>Team Tokens</h3>
                    <h2>1 M TOKENS</h2>
                </div>
                <div className="tokenInfo-item">
                    <h3>Token Distribution</h3>
                    <h2>10 mill</h2>
                </div>
                <div className="tokenInfo-item">
                    <h3>Token ticker</h3>
                    <h2>$CLM</h2>
                </div>
                <div className="tokenInfo-item">
                    <h3>First Milestone MC</h3>
                    <h2>$1 million</h2>
                </div>
            </div>
        </div>
    );
};

export default TokenInfo;
