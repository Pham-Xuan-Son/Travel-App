import { bigImagesSlider, imagesSlider, hagiangMapSlider } from "../unit/Image";

interface ImageTextOverlayProps {
  isHovered: boolean;
  isMobile: boolean;
  currentImage: number;
}

export default function ImageTextOverlay({
  isHovered,
  isMobile,
  currentImage,
}: ImageTextOverlayProps) {
  return (
    <>
      <img
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/images/HaGiang02.png`}
        alt="Image 2"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26, 84, 58, 0.9)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          padding: "20px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        <img
          src={
            isHovered
              ? `${process.env.PUBLIC_URL}${bigImagesSlider[currentImage].src}`
              : `${process.env.PUBLIC_URL}${imagesSlider[currentImage].src}`
          }
          alt={
            isHovered
              ? bigImagesSlider[currentImage].name
              : imagesSlider[currentImage].name
          }
          style={
            isHovered
              ? {
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }
              : {
                  width: "auto",
                  maxWidth: isMobile ? "300px" : "500px",
                  marginBottom: "20px",
                }
          }
        />
        {isHovered && (
          <img
            src={`${process.env.PUBLIC_URL}${hagiangMapSlider[currentImage].src}`}
            alt={hagiangMapSlider[currentImage].name}
            style={{
              position: "absolute",
              top: "20vh",
              right: "2vw",
              width: "auto",
              maxWidth: "20vw",
              zIndex: 4,
            }}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          top: isHovered ? "-100vh" : "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          zIndex: 1,
          transform: "translate(-50%, -50%)",
          transition: "top 0.5s ease-in-out",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "0.8rem" : "1.5rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          GET READY
        </p>
        <p
          style={{
            fontSize: isMobile ? "2rem" : "4rem",
            fontWeight: "bold",
            margin: "0.5rem 0 0 0",
            textAlign: "center",
          }}
        >
          DISCOVER <br /> HA GIANG LOOP
        </p>
      </div>
    </>
  );
}
