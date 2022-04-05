import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h3 className="text-white" data-aos='slide-right'>MERN Stack Developer</h3>
            <div className="h-50">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <div className="h-50">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h3 className="text-white" data-aos='slide-left'>Youtuber</h3>
          </div>
        </div>
        <div className="separator-text">
            <span>TECHINFOYT</span>
        </div>
      </div>
    </>
  );
};

export default Home;
