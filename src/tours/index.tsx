import React, { useCallback, useState } from "react";
import { listCard } from "../unit/Image";
import useScreenResize from "../hook/useScreenResize";

export default function Tour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useScreenResize();

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : listCard.length - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < listCard.length - 1 ? prev + 1 : 0));
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "rgba(26, 84, 58, 0.9)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        {listCard.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 100%",
              display: index === currentIndex ? "block" : "none",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}${card.src}`}
              alt={card.name}
              style={{
                width: isMobile ? "100vw" : "80vw",
                height: "100vh",
                marginRight: isMobile ? 0 : "10vw",
                marginLeft: isMobile ? 0 : "10vw",
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          padding: "10px",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        &#9664;
      </button>
      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          padding: "10px",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        &#9654;
      </button>
    </div>
  );
}
