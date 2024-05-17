import React from "react";
import "./HomePage.css";
import ElonMuskLogo from "../../assets/elon_musk_logo.svg";
import { HashLink } from "react-router-hash-link";
import ConnectBtn from "../ConnectBtn/ConnectBtn";
const HomePage = () => {
  return (
    <div className="main-container w-[100%] h-[54.6rem] ">
      <div className="home-page w-[100%] h-[100%]   flex items-center justify-center  ">
        <div className="content  h-[90%] w-[85%] relative flex items-center ">
          <div className="  absolute top-0 right-0 ">
            <ConnectBtn />
          </div>
          <div className="  w-[34rem] h-[12rem] relative ">
            <img src={ElonMuskLogo} alt="" className=" absolute top-[-15em]" />
            <div className="text  text-[4.25rem] font-[400] text-white">
              play games & <span className=" text-[#FFFF00] ">earn $gtm</span>
            </div>
            <div className=" w-[100%]  absolute top-[15rem] flex  justify-between  ">
              <a href="#game">
                <button className="play-now hover:scale-105  ">PLAY NOW</button>
              </a>
              <a href="https://app.uniswap.org/swap?outputCurrency=0xe8b1e79d937c648ce1fe96e6739ddb2714058a18" target="_blank" >
                <button className="buy-gtm hover:scale-105">BUY $GTM</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
