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
            widthI="80vw"
            handleMouseEnter={handleMouseEnter}
          />
        </>
      )}
      {isMobile && (
        <>
          <DisplayPage
            isHovered={isHovered}
            widthI="100vw"
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
  handleMouseEnter,
}: {
  isHovered: boolean;
  widthI: string;
  handleMouseEnter: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
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
            fontSize: "3rem",
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
          src={`${process.env.PUBLIC_URL}/images/Beautiful.PNG`}
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
          src={`${process.env.PUBLIC_URL}/images/HaGiang02.PNG`}
          alt=""
          style={{
            width: isHovered ? widthI : "40vw",
            height: isHovered ? "60vh" : "40vh",
            position: "absolute",
            top: "40vh",
            transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
