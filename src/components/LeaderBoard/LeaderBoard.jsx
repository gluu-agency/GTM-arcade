import React, { useEffect, useState } from "react";
import "./LeaderBoard.css";
import Arrow from "../../assets/leaderboard_arrow.svg";
import { Link } from "react-router-dom";
import { getTopScoresForPartners } from "../../hooks/getScore";
import ConnectBtn from "../ConnectBtn/ConnectBtn";
import { createPartners } from "../../hooks/createPartner";

const LeaderBoard = () => {
  const [eligiblePartners, setEligiblePartners] = useState(createPartners());
  const [selectedPartner, setSelectedPartner] = useState(eligiblePartners[0]?.partnerName); // Default to "GTM"
  const [data, setData] = useState([]);
  console.log(selectedPartner)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch scores only for the currently selected partner
        const scores = await getTopScoresForPartners(eligiblePartners);
        const filteredData =
          scores.find((partnerData) => partnerData.partner === selectedPartner)
            ?.topScores || [];
        setData(filteredData);
      } catch (error) {
        console.error("Error fetching user scores:", error);
      }
    };

    fetchData();
  }, [selectedPartner]); // Dependency array includes selectedPartner

  const handlePartnerSelect = (partner) => {
    setSelectedPartner(partner); // Update the selected partner when a button is clicked
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div
      id="leaderboard"
      className="leaderboard-container w-[100%] h-[110rem] bg-black"
    >
      <div className="leaderboard-header-body h-[28.813rem] flex justify-center relative">
        <div className="leaderboard-body h-[90%] w-[85%] absolute bottom-0">
          <ConnectBtn />
          <div className="bottom-0 absolute">
            <div className="leaderboard-header-heading relative w-fit mb-6">
              arcade leaderboard
              <Link to="/">
                <img
                  className="absolute right-0 top-[-4rem]"
                  src={Arrow}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex gap-10">
              {eligiblePartners.map((partner) => (
                <button
                  key={partner.partnerName}
                  className={`flex justify-center items-center gap-2 mb-5 w-fit px-3 ${
                    partner.partnerName === selectedPartner
                      ? "gtm-btn"
                      : "gtm-btn-active"
                  }`}
                  onClick={() => handlePartnerSelect(partner.partnerName)}
                >
                  <div className="w-[2rem] h-[2rem] border-[2px] rounded-[50%] flex justify-center items-center bg-black">
                    <img className="w-[68%]" src={partner.partnerLogo} alt="" />
                  </div>
                  <div>{partner.partnerName}</div>
                </button>
              ))}
            </div>
            <div className="leaderboard-header-text mb-4">
              VIEW YOUR GLOBAL RANKING OR YOUR PLACE WITHIN ONE OF OUR PARTNER
              COLLECTIONS
            </div>
          </div>
        </div>
      </div>
      <div className="leaderboard-table-container h-[73.75%] flex flex-col items-center">
        <div className="leaderboard-table-body w-[85%] h-[80%] text-white">
          <table className="border-t border-b border-white w-full">
            <thead className="text-[#C2DAF2]">
              <tr>
                <th className="py-7 text-left">#</th>
                <th className="py-7 text-left">PLAYER</th>
                <th className="py-7 text-left">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((elem, index) => (
                  <tr key={index} className="border-t hover:bg-[#FFFF003D]">
                    <th className="py-7 text-left" scope="row">
                      {index + 1}
                    </th>
                    <td className="py-7 text-left">{elem.walletAddress}</td>
                    <td className="py-7 text-left">{elem.gameScore}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-7">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
