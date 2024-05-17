import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import Game from "./pages/GamePage/Game";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { useMediaQuery } from "react-responsive";
import MobileApp from "./components/MobileApp";
import { createPartners } from "./hooks/createPartner";
const App = () => {
  console.log(createPartners())
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", function (accounts) {
        console.log("Ethereum accounts changed:", accounts);
        window.location.reload();
      });

      window.ethereum.on("chainChanged", function (networkId) {
        console.log("Ethereum network changed:", networkId);
        window.location.reload();
      });

      return () => {
        window.ethereum.removeAllListeners("accountsChanged");
        window.ethereum.removeAllListeners("chainChanged");
      };
    }
  }, []);
  return (
    <>
      {isMobile ? (
        <MobileApp />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
