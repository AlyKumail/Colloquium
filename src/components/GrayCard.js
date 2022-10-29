import React from "react";
import "../styles/GrayCard.css";
import SomeDetail from "./SomeDetail";
import DaoDetail from "./DaoDetail";

const GrayCard = () => {
    return (
        <div className="gray-container">
            <SomeDetail />
            <div className="border-line"></div>
            <DaoDetail />
        </div>
    );
};

export default GrayCard;
