import React, { useState, useEffect, useCallback } from "react";
import { imagesSlider, bigImagesSlider } from "../unit/Image";
import useScreenResize from "../hook/useScreenResize";
import { useNavigate } from "react-router-dom";
import ScreenButton from "../common/ScreenButton";
import ImageTextOverlay from "./ImageTextOverlay";
import BookingMenu from "./ScreenHomeBookingMenu";

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const isMobile = useScreenResize();
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentImage(
        (prevIndex) =>
          (prevIndex + 1) %
          (isHovered ? bigImagesSlider.length : imagesSlider.length)
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMenuClick = (menu: string) => () => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const goToMenu = () => {
    navigate("/menu");
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={handleMouseEnter}
    >
      {!isMobile && (
        <>
          <ImageTextOverlay
            currentImage={currentImage}
            isHovered={isHovered}
            isMobile={isMobile}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "white",
              border: "1px solid red",
              zIndex: 2,
            }}
          >
            <BookingMenu
              activeMenu={activeMenu}
              handleMenuClick={handleMenuClick}
            />
          </div>
          <img
            loading="lazy"
            src={`${process.env.PUBLIC_URL}/images/HostelLogo.png`}
            alt="logo"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "auto",
              maxWidth: "150px",
              zIndex: 3,
            }}
          />
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "auto",
              maxWidth: "150px",
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "50px",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: 3,
            }}
            onClick={goToMenu}
          >
            MENU
          </button>
          <ScreenButton />
        </>
      )}
      {isMobile && (
        <>
          <ImageTextOverlay
            currentImage={currentImage}
            isHovered={isHovered}
            isMobile={isMobile}
          />
          <img
            loading="lazy"
            src={`${process.env.PUBLIC_URL}/images/HostelLogo.png`}
            alt="logo"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "auto",
              maxWidth: "150px",
              zIndex: 3,
            }}
          />
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "auto",
              maxWidth: "150px",
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "50px",
              fontWeight: "bold",
              cursor: "pointer",
              zIndex: 3,
            }}
            onClick={goToMenu}
          >
            MENU
          </button>
          <ScreenButton />
        </>
      )}
    </div>
  );
}
