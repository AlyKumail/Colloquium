import React from "react";
import "../styles/Shares.css";

const Shares = () => {
    return (
        <div className="shares-container">
            <div className="container ">
                <div className="share share1">
                    <h3>Team</h3>
                    <h2>10%</h2>

                    <div className="area"></div>
                </div>
                <div className="share share2">
                    <h3>Marketing</h3>
                    <h2>10%</h2>
                    <div className="area"></div>
                </div>
                <div className="share share3">
                    <h3>Advisors(for DAO)</h3>
                    <h2>10%</h2>
                    <div className="area"></div>
                </div>
                <div className="share share4">
                    <h3>ICO(DAO FUNDS)</h3>
                    <h2>70%</h2>
                    <div className="area"></div>
                </div>
            </div>
        </div>
    );
};

export default Shares;
