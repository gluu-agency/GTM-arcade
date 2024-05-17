import React, { useEffect } from "react";
import "./Game.css";
import { useLocation } from "react-router-dom";
import { addUserScoreToPartnerCollection } from "../../hooks/setScore.js"; // Updated import
import { HashLink } from "react-router-hash-link";
import { IoIosArrowBack } from "react-icons/io";
import {
  getUserScoresFromPartners,
  deleteSingleUserScore,
} from "../../hooks/getScore.js";
import { useAccount } from "wagmi";

const Game = () => {
  const location = useLocation();
  const { gameLink, scoreWeight, eligiblePartners } = location.state;
  const GameID = 1;
  const { address } = useAccount();

  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.origin !== gameLink) {
        console.log("Received message from untrusted origin:", event.origin);
        return;
      }
      console.log("Received message from trusted origin:", event.origin);

      const scoreData = event.data.score;
      console.log("Score received:", scoreData); // Log the score data when received

      if (scoreData !== undefined && scoreData > 0) {
        const partnerScores = await getUserScoresFromPartners(
          address,
          eligiblePartners
        );
        let finalScore = scoreData * scoreWeight;
        console.log("Calculated final score:", finalScore); // Log the calculated final score

        // Process each partner separately
        partnerScores.forEach(async (partnerScore) => {
          if (partnerScore.gameScore < finalScore) {
            // Check if the new score is higher than the current score for each partner
            await deleteSingleUserScore(address, partnerScore.partner); // Assuming a modified function to delete by partner
            await addUserScoreToPartnerCollection(
              partnerScore.partner,
              GameID,
              address,
              finalScore
            );
          } else {
            console.log(`Not a highest score for ${partnerScore.partner}`);
          }
        });
      } else {
        console.log("Received message from iframe:", event.data); // Log the entire message for debugging
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [address, eligiblePartners, gameLink, scoreWeight]);

  return (
    <>
      <div
        id="game"
        className="game-page-container h-screen w-full bg-black flex justify-center items-center relative"
      >
        <HashLink to="/#game">
          <div className="text-white text-[4rem] cursor-pointer absolute z-40 top-5 left-5">
            <IoIosArrowBack />
          </div>
        </HashLink>
        <iframe
          className="game-iframe w-[100%] h-[100%]"
          title="Game"
          src={gameLink}
        />
      </div>
    </>
  );
};

export default Game;
