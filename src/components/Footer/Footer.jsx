import React from "react";
import "./Footer.css";
import EtherScanLogo from "../../assets/etherscan-logo-circle 1.svg";
import DexToolsLogo from "../../assets/dextools 1.svg";
import TwitterLogo from "../../assets/akar-icons_twitter-fill.svg";
import YoutubeLogo from "../../assets/mdi_youtube.svg";
import TikTokLogo from "../../assets/ic_baseline-tiktok.svg";
import TelegramLogo from "../../assets/teenyicons_telegram-solid.svg";
import InstagramLogo from "../../assets/mdi_instagram.svg";
const Footer = () => {
  return (
    <>
      <div className="footer-container w-[100%] h-[5rem] bg-[#FFFF00] ">
        <div className="footer-page w-[100%] h-[100%] flex items-center justify-center  ">
          <div className="footer-page-content border  border-yellow-200 h-[90%] w-[85%] flex items-center  justify-between ">
            <a
              href="https://app.uniswap.org/swap?outputCurrency=0xe8b1e79d937c648ce1fe96e6739ddb2714058a18"
              target="_blank"
            >
              <div className="footer-connect-button">
                <div className="flex items-center gap-2 right-6  text-white ">
                  BUY $GTM
                </div>
              </div>
            </a>
            <div className="flex gap-8  ">
              <a href="https://etherscan.io/address/0xe8b1e79d937c648ce1fe96e6739ddb2714058a18" target="_blank">
                <img src={EtherScanLogo} alt="" />
              </a>
              <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x2f679f848622da6f39f9ad807c7786618d283c79?t=1714129755162" target="_blank">
                <img src={DexToolsLogo} alt="" />
              </a>
              <a href="https://twitter.com/ColonizeMars_" target="_blank">
                <img src={TwitterLogo} alt="" />
              </a>
              <a href="https://www.youtube.com/@ACTIVESH1" target="_blank">
                <img src={YoutubeLogo} alt="" />
              </a>
              <a href="https://www.tiktok.com/@gtm_colonizemars" target="_blank">
                <img src={TikTokLogo} alt="" />
              </a>
              <a href="https://t.me/GatewayToMars_Portal" target="_blank">
                <img src={TelegramLogo} alt="" />
              </a>
              <a href="https://www.instagram.com/colonizemars_gtm/" target="_blank" >
                <img src={InstagramLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
