import React from "react";
import ELonCenter from "../../assets/images/partner_page_elon_center.png";
import QuestionMark from "../../assets/images/circle.jpeg";

const CircleLayout = () => {
  // Fetch the logos from the environment variable and split them into an array
  const PARTNER_LOGOS = process.env.REACT_APP_PARTNER_LOGOS
    ? process.env.REACT_APP_PARTNER_LOGOS.split(",")
    : [];

  // The size of the images array should be 9
  const images = [];
  const totalImages = 9;

  // Fill the images array with available images or the Question Mark if not enough logos are provided
  for (let i = 0; i < totalImages; i++) {
    if (i < PARTNER_LOGOS.length) {
      images.push(PARTNER_LOGOS[i]); // Push partner logo if available
    } else {
      images.push(QuestionMark); // Fill the rest with the Question Mark image
    }
  }

  const angleStep = 360 / images.length; // Calculate the step angle

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-96 h-96 ml-[5rem]">
        <img
          src={ELonCenter}
          alt="Center"
          className="absolute top-1/2 left-1/2 w-[16.588rem] h-[16.588rem] transform -translate-x-1/2 -translate-y-1/2"
        />
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Surrounding ${index + 1}`}
            className="absolute top-[8rem] right-[7.9rem] w-[8rem] h-[8rem] rounded-full"
            style={{
              transform: `rotate(${
                angleStep * index + 270
              }deg) translate(15rem) rotate(-${angleStep * index + 270}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleLayout;
