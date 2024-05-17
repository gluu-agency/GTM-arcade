import React from "react";
import "./PartnerPage.css";
import PartnerWithUs from "../../assets/partner_with_us.svg";
import Partner from "../../assets/partners.svg";
import CircleLayout from "./CircleLayout";
const PartnerPage = () => {
  return (
    <>
      <div className="partner-page-container w-[100%] h-[54.6rem] ">
        <div className="partner-page w-[100%] h-[100%] flex items-center justify-center  ">
          <div className="partner-page-content  h-[90%] w-[85%] ">
            <div className="  flex justify-between ">
              <div className="partner-page-header-text">partners</div>
              <a href="https://t.me/GatewayToMars_Portal" target="_blank">
              <img src={PartnerWithUs} alt="" />
              </a>
            </div>
            <div className="  h-[91%] flex items-center ">
              <CircleLayout/>
              {/* <img
                className=" w-[34.625rem] h-[37.75rem] "
                src={Partner}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerPage;
