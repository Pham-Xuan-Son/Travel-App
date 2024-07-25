import { useState } from "react";
import useScreenResize from "../hook/useScreenResize";

interface Props {
  text: string;
}
export default function ButtonAnimation({ text }: Props) {
  const isMobile = useScreenResize();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{
        position: "relative",
        width: "50px",
        height: "50px",
        margin: isMobile ? "10px" : "55px",
      }}
    >
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: isMobile ? "50px" : "150px",
          height: isMobile ? "50px" : "150px",
          borderRadius: "50%",
          backgroundColor: isHovered ? "red" : "transparent",
          color: "white",
          border: "2px solid transparent",
          position: "relative",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "background-color 0.3s",
          zIndex: 1,
        }}
      >
        <p style={{ fontSize: isMobile ? "0.5rem" : "1rem" }}>{text}</p>
      </button>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: isMobile ? "50px" : "150px",
          height: isMobile ? "50px" : "150px",
          borderRadius: "50%",
          border: "2px dashed white",
          boxSizing: "border-box",
          animation: "spin 2s linear infinite",
        }}
      ></div>
    </div>
  );
}

const styles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
