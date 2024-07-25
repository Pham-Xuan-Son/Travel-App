export default function ScreenButton() {
  return (
    <div>
      <img
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/images/book.PNG`}
        alt="logo"
        style={{
          position: "absolute",
          bottom: "20vh",
          right: "1vw",
          width: "70px",
          height: "56px",
          color: "white",
          border: "none",
          borderRadius: "50%",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "10px",
        }}
      />
      <img
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/images/call.PNG`}
        alt="logo"
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "1vw",
          width: "70px",
          height: "70px",
          color: "white",
          border: "none",
          borderRadius: "50%",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "10px",
        }}
      />
    </div>
  );
}
