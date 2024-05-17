import React, { useState, useEffect } from "react";
import "./GamePageCard.css";
import { useNetwork, useAccount, useFeeData } from "wagmi";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GamePageCard = ({
  partnerBalances, // This prop should be an array of objects { balance, partnerName, reqToken }
  name,
  imageSrc,
  scoreWeight,
  gameLink,
}) => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [isClicked, setIsClicked] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [eligiblePartners, setEligiblePartners] = useState([]);

  useEffect(() => {
    setIsConnected(!!address);
    // Filter for eligible partners and update state
    const eligible = partnerBalances.filter(
      (partner) => partner.balance >= partner.reqToken
    );
    setCanPlay(eligible.length > 0);
    setEligiblePartners(eligible.map((partner) => partner.partnerName));
    console.log("ELigible", eligible);
  }, [address, partnerBalances]);
  useEffect(() => {
    console.log("canPLay", canPlay);
  }, [canPlay]);
  return (
    <>
      <div className="h-[35rem]">
        <div className="game-page-card flex justify-center relative hover:scale-105">
          <div className="w-[100%] h-[90%] mt-8 flex flex-col justify-center">
            <div className="game-page-card-name">{name}</div>
            <div className="w-[100%] flex justify-center">
              <img src={imageSrc} className="w-[98%] h-[17.5rem]" alt="" />
            </div>
            <div className="h-[4.6rem] flex items-center px-[1rem]">
              {isConnected ? (
                canPlay ? (
                  <button className="game-card-btn">
                    <HashLink
                      to="/game#game"
                      state={{ gameLink, scoreWeight, eligiblePartners }}
                    >
                      <div onClick={() => setIsClicked((val) => !val)}>
                        PLAY
                      </div>
                    </HashLink>
                  </button>
                ) : (
                  <button className="game-card-btn">
                    <div onClick={() => setIsClicked((val) => !val)}>PLAY</div>
                  </button>
                )
              ) : (
                <button className="game-card-btn">
                  <div onClick={() => setIsClicked((val) => !val)}>PLAY</div>
                </button>
              )}
            </div>
          </div>
          {isClicked ? (
            isConnected ? (
              canPlay ? null : partnerBalances.length > 0 ? (
                <div className="game-card-notification absolute text-[#FF5050] w-full bottom-[-8rem]">
                  Not enough balance to play, buy one {" "}
                  <span className="text-[#FFFF00]">of our partner tokens to
                  proceed</span>
                </div>
              ) : (
                <div className="game-card-notification absolute text-[#FF5050] w-full bottom-[-5rem]">
                  Loading your{" "}
                  <span className="text-[#FFFF00]">balance...</span>
                </div>
              )
            ) : (
              <div className="game-card-notification absolute text-[#FF5050] w-full bottom-[-3rem]">
                Connect wallet to <span className="text-[#FFFF00]">play</span>
              </div>
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default GamePageCard;
