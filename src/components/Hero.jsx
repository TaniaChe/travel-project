import React from "react";
import beachBg from "../assets/beach-video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={beachBg}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Hero;
