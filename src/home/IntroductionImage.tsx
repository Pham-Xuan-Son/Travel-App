import React, { useState } from "react";
import useScreenResize from "../hook/useScreenResize";

export default function IntroductionImage() {
  const isMobile = useScreenResize();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);

  return (
    <div>
      {!isMobile && (
        <>
          <DisplayPage
            isHovered={isHovered}
            widthI="90vw"
            fontSize="3rem"
            handleMouseEnter={handleMouseEnter}
          />
        </>
      )}
      {isMobile && (
        <>
          <DisplayPage
            isHovered={isHovered}
            widthI="100vw"
            fontSize="1.5rem"
            handleMouseEnter={handleMouseEnter}
          />
        </>
      )}
    </div>
  );
}

function DisplayPage({
  isHovered,
  widthI,
  fontSize,
  handleMouseEnter,
}: {
  isHovered: boolean;
  widthI: string;
  fontSize: string;
  handleMouseEnter: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(26, 84, 58, 0.9)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            color: "white",
            position: "absolute",
            top: "5vh",
          }}
        >
          WELCOME TO
        </p>
        <p
          style={{
            fontSize: fontSize,
            fontWeight: "bold",
            color: "white",
            position: "absolute",
            top: "10vh",
          }}
        >
          HA GIANG NATURALLY
        </p>
        <img
          loading="lazy"
          src={`${process.env.PUBLIC_URL}/images/Beautiful.png`}
          alt=""
          style={{
            width: "30vw",
            height: "20vh",
            position: "absolute",
            top: "20vh",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        onMouseEnter={handleMouseEnter}
      >
        <img
          loading="lazy"
          src={`${process.env.PUBLIC_URL}/images/HaGiang02.png`}
          alt=""
          style={{
            width: isHovered ? widthI : "80vw",
            height: isHovered ? "60vh" : "50vh",
            position: "absolute",
            top: "40vh",
            transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
