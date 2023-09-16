import React, { useEffect, useState, useRef } from "react";
import "../styles/background.css";
import video1 from "../assets/blue-bg.mp4";
import video2 from "../assets/fiber.mp4";
import video3 from "../assets/green-light.mp4";
import video4 from "../assets/sea-waves.mp4";
import video5 from "../assets/stars.mp4";
import video6 from "../assets/sparkles.mp4";
import video7 from "../assets/ring.mp4";
import video8 from "../assets/saturn.mp4";
import video9 from "../assets/night-stars.mp4";
import fallbackImage from "../assets/fallback-image.png";

const arr = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
];

const Background = ({ bgChanger }) => {
  const [bgVal, setBgVal] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the new background source
    videoRef.current.src = arr[bgVal];

    // Add an event listener to start playing once the video can play
    videoRef.current.addEventListener("canplay", handleVideoCanPlay, {
      once: true,
    });

    // Set the new background value after handling the source change
    setBgVal(bgChanger);
  }, [bgChanger]);

  const handleVideoCanPlay = () => {
    // Start playing the video once it can play
    videoRef.current.play();
  };

  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        ref={videoRef}
        playsInline
        muted
        loop
        preload="auto"
        id="bg"
        poster={fallbackImage}
      />
    </>
  );
};

export default Background;
