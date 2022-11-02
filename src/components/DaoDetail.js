import React from "react";
import thedao1 from "../images/thedaiomg.png";
import thedao from "../images/thedao.png";
import globe from "../images/globe.png";
import Rings from "../images/Rings.png";
import "../styles/DaoDetail.css";

const DaoDetail = () => {
    return (
        <div className="daoDetail-container">
            <div className="container">
                <div className="daoDetail-item flex-between-center">
                    <div className=" daoDetail-item-left">
                        <h3>The DAO</h3>
                        <p>
                            A Dao is a decentralized autonomous organization, a
                            type of bottom-up entity structure with no central
                            authority, meaning token holders make the decisions.
                            With the ICO and sell taxes, the DAO will raise
                            revenue that ultimately YOU will vote on what to do
                            with.
                        </p>
                    </div>
                    <div className="daoDetail-item-right">
                        <img className="" src={thedao1} alt="" />
                    </div>
                </div>
                <div className="daoDetail-item daoDetail-item-rev flex-between-center">
                    <div className="daoDetail-item-left-rev">
                        <img className="globe" src={globe} alt="" />
                    </div>
                    <div className="daoDetail-item-right-rev">
                        <h3>The GOAL</h3>
                        <p>
                            Some of you may be thinking, what would we do with
                            the funds ? Anything ! Voters of the DAO control
                            what happens, but our goal is to have renown
                            educators and innnovators in the space guide the
                            community and offer their expereince to help curate
                            the DAO into something revolutionary. Thus the name
                            Colloquium. Anything is possible, build a new
                            exchange, buy a soccer team ? possibilities are
                            endless
                        </p>
                    </div>
                </div>
                <div className="daoDetail-item  flex-between-center">
                    <div className="daoDetail-item-left">
                        <h3>WHAT INCENTIVIZES BUYERS</h3>
                        <p>
                            Voting power. token holders will have voting powers
                            based on a fair system described in our white paper.
                            but more than that, whatever the DAO creates, token
                            holders will get early access, pre-sales, private
                            community, etc.. A small (minimum) amount of tokens
                            must be held to enter the DAO, so even smaller
                            holders will be rewarded.
                        </p>
                        <a href="#" className="greenBtn">
                            Join Telegram
                        </a>
                    </div>
                    <div className="daoDetail-item-right">
                        <img className="ringImg" src={Rings} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DaoDetail;
