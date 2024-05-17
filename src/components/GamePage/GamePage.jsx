import React, { useState, useEffect } from "react";
import "./GamePage.css";
import ViewLeaderboard from "../../assets/viewLeaderboard.svg";
import GamePageCard from "./Card/GamePageCard";
import "swiper/css";
import "swiper/css/navigation";
import Slide from "@mui/material/Slide";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import speedbounceimg from "../../assets/images/gamecard/speedbounce.png";
import randombounceimg from "../../assets/images/gamecard/randombounce.png";
import brickbounceimg from "../../assets/images/gamecard/brickbounce.png";
import spaceclashimg from "../../assets/images/gamecard/clashofspace.png";
import snakeimg from "../../assets/images/gamecard/snake.png";
import pacmanimg from "../../assets/images/gamecard/pacman.png";
import RightArrowIcon from "../../assets/sliderArrow.svg";
import LeftArrowIcon from "../../assets/images/leftarrow.png";
import { CreatePartner, createPartners } from "../../hooks/createPartner.js";
import { useProvider, useAccount } from "wagmi";
import { Contract } from "ethers";
import { contractABI } from "../../utils/contractABI";
import { ethers } from "ethers";
import { useNetwork } from "wagmi";
import { useSelector, useDispatch } from "react-redux";
import { setBalance } from "../../features/balanceSlice.js";
import { HashLink } from "react-router-hash-link";
import YellowBg from "../../assets/images/game_page_yellow_bg.svg";

const GamePage = () => {
  const partners = createPartners();
  const provider = useProvider();
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const [partnerBalances, setPartnerBalances] = useState([]);

  useEffect(() => {
    const updateBalances = async () => {
      const balances = [];

      for (const partner of partners) {
        if (partner.contractAddress) {
          let customProvider = provider;
          if (partner.rpcUrl) {
            customProvider = new ethers.providers.JsonRpcProvider(
              partner.rpcUrl
            );
          }
          try {
            const contract = new Contract(
              partner.contractAddress,
              contractABI,
              customProvider
            );
            const balanceInWei = await contract.balanceOf(address);
            const balance = ethers.utils.formatEther(balanceInWei);
            balances.push({
              partnerName: partner.partnerName,
              balance: Math.floor(balance),
              reqToken: parseInt(partner.reqToken),
            });
          } catch (error) {
            console.log(
              "Error fetching balance for:",
              partner.partnerName,
              error
            );
            balances.push({
              partnerName: partner.partnerName,
              balance: 0,
              reqToken: partner.reqToken,
            });
          }
        }
      }
      setPartnerBalances(balances);
      console.log("ba", balances);
    };

    if (provider && address) {
      updateBalances();
    }

    setIsConnected(!!address);
  }, [address, provider, partners]);

  const games = [
    {
      name: "GTM Clash of Space",
      imageSrc: spaceclashimg,
      gameLink: "https://clash-of-space-pi.vercel.app",
      scoreWeight: 3,
      numberOfStars: 3,
    },
    {
      name: "SpeedBounce",
      imageSrc: speedbounceimg,
      gameLink: "https://speedbouncer.vercel.app",
      scoreWeight: 200,
      numberOfStars: 4,
    },
    {
      name: "RandomBounce",
      imageSrc: randombounceimg,
      gameLink: "https://randombounce.vercel.app",
      scoreWeight: 250,
      numberOfStars: 5,
    },
    {
      name: "BrickBounce",
      imageSrc: brickbounceimg,
      gameLink: "https://brickbounce.vercel.app",
      scoreWeight: 68,
      numberOfStars: 4,
    },
    {
      name: "Snake",
      imageSrc: snakeimg,
      gameLink: "https://snake-game-pi-gilt.vercel.app",
      scoreWeight: 70,
      numberOfStars: 4,
    },
    {
      name: "Pacman",
      imageSrc: pacmanimg,
      gameLink: "https://pacman-theta.vercel.app",
      scoreWeight: 1,
      numberOfStars: 3,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const cardsPerPage = 3;
  const containerWidth = cardsPerPage * 300;

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div
        id="game"
        className="game-container w-[100%] h-[54.6rem] bg-black relative "
      >
        <div className="game-page w-[100%] h-[100%] flex items-center justify-center  ">
          <div className="game-page-content  h-[90%] w-[85%]  ">
            <div className="game-page-header  flex justify-between ">
              <div className="game-page-heading">
                <div className="game-page-header-text">pick a game</div>
                <div className="game-page-para-text">
                  ALL GAMES ARE PROVABLY FAIR.{" "}
                  <span className=" text-[#C2DAF2] "> VIEW SMART CONTRACT</span>{" "}
                  <br /> REMEMBER, IF YOU LOSE, YOU LOSE 100%, BUT IF YOU WIN...
                </div>
              </div>
              <HashLink to="/leaderboard#leaderboard">
                <img className=" z-10 " src={ViewLeaderboard} alt="" />
              </HashLink>
            </div>

            <div className="game-card-container  mt-10 relative ">
              <Box
                sx={{
                  width: `100%`,
                  height: "120%",
                }}
              >
                <IconButton
                  sx={{
                    top: "0em",
                    position: "absolute",
                    top: "25%",
                    zIndex: "30",
                  }}
                  disabled={currentPage === 0}
                  onClick={handlePrevPage}
                >
                  {/* this is the button that will go to the previous page you can change these icons to whatever you wish*/}
                  <img
                    className={
                      currentPage === 0 ? "opacity-0  " : "opacity-100 "
                    }
                    src={LeftArrowIcon}
                    alt=""
                  />
                </IconButton>
                {games.map((card, index) => (
                  <Box
                    key={`card-${index}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: currentPage === index ? "block" : "none",
                    }}
                  >
                    {/* this is the slide animation that will be used to slide the cards in and out*/}
                    <Slide
                      direction={slideDirection}
                      in={currentPage === index}
                    >
                      <Stack
                        spacing={4}
                        direction="row"
                        alignContent="center"
                        justifyContent="center"
                        // sx={{ width: "100%", height: "100%" }}
                      >
                        {/* this slices the cards array to only display the amount you have previously determined per page*/}
                        {games
                          .slice(
                            index * cardsPerPage,
                            index * cardsPerPage + cardsPerPage
                          )
                          .map((game, index) => (
                            <Box key={index}>
                              <GamePageCard
                                partnerBalances={partnerBalances}
                                name={game.name}
                                imageSrc={game.imageSrc}
                                gameLink={game.gameLink}
                                scoreWeight={game.scoreWeight}
                                numberOfStars={game.numberOfStars}
                              />
                            </Box>
                          ))}
                      </Stack>
                    </Slide>
                  </Box>
                ))}
              </Box>
              <IconButton
                sx={{ position: "absolute", top: "25%", right: "0" }}
                disabled={
                  currentPage >=
                  Math.ceil((games.length || 0) / cardsPerPage) - 1
                }
                onClick={handleNextPage}
              >
                <img
                  className={
                    currentPage >=
                    Math.ceil((games.length || 0) / cardsPerPage) - 1
                      ? "opacity-0"
                      : "opacity-100"
                  }
                  src={RightArrowIcon}
                  alt=""
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
