import React from "react";
import "./AboutUsPage.css";
const AboutUsPage = () => {
  return (
    <>
      <div className="aboutus-container w-[100%] h-[54.6rem] ">
        <div className="aboutus-page w-[100%] h-[100%] flex items-center justify-center  ">
          <div className="aboutus-page-content  h-[90%] w-[85%] flex items-center ">
            <div className="aboutpage-para">
              <div className="aboutus-header mb-3">ABOUT US</div>
              <div className="aboutuspara w-[28.375rem] ">
                At GTM Arcade, we're passionate about creating unforgettable
                gaming experiences for our players. Our journey began with a
                simple idea: to provide a space where gamers can come together,
                compete, and connect like never before. Since our inception,
                we've been committed to delivering top-notch entertainment,
                innovative games, and exciting rewards
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
