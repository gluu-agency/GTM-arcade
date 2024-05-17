import React from "react";
import HomePage from "../components/HomePage/HomePage";
import GamePage from "../components/GamePage/GamePage";
import PartnerPage from "../components/ParnterPage/PartnerPage";
import AboutUsPage from "../components/AboutUsPage/AboutUsPage";

const Home = () => {
  return (
    <>
      <HomePage />
      <GamePage />
      <PartnerPage />
      <AboutUsPage />
    </>
  );
};

export default Home;
