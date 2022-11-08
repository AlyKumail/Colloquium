import React from "react";
import "../styles/SomeDetail.css";
import telegram from "../images/telegram.png";
import someDetailImg from "../images/someDetail-item.png";

const SomeDetail = () => {
    return (
        <div className="someDetail-container" id="about">
            <div className="container">
                <div className="someDetail-header flex-between-center">
                    <h2>Some Details</h2>
                    <a href="https://t.me/colloquiumdao" className="grayBtn ">
                        <img src={telegram} alt="" />
                        <span>OUR TELEGRAM</span>
                    </a>
                </div>
                <div className="someDetail-body flex-between-start">
                    <div className="someDetail-item">
                        <h3>01</h3>
                        <h2>
                            {" "}
                            <img src={someDetailImg} alt="" />
                            &nbsp; What blockchain ?
                        </h2>
                        <p>
                            Colloquium is a goverence token built on top of the
                            ethereum blockchain.
                        </p>
                    </div>
                    <div className="someDetail-item">
                        <h3>02</h3>
                        <h2>
                            <img src={someDetailImg} alt="" />
                            &nbsp; ICO
                        </h2>
                        <p>
                            An initial coin offering (ICO) is the cryptocurrency
                            industry’s equivalent of an initial public offering
                            (IPO). A company seeking to raise money to create a
                            new coin, app, or service can launch an ICO as a way
                            to raise funds. In this case we’re raising funds for
                            the DAO.
                        </p>
                    </div>
                    <div className="someDetail-item">
                        <h3>03</h3>
                        <h2>
                            <img src={someDetailImg} alt="" />
                            &nbsp; How can I join ?{" "}
                        </h2>
                        <p>
                            Join the Telegram ! we’d love to have you, we’re
                            building a strong community before launch, so you
                            have plenty of time. Feel free to ask any question
                            in the chat
                        </p>
                    </div>
                </div>
                <div className="someDetail-footer">
                    <h2>Colloquium DAO</h2>
                    <h3>ONE GOAL: Build some crazy shit</h3>
                </div>
            </div>
        </div>
    );
};

export default SomeDetail;
