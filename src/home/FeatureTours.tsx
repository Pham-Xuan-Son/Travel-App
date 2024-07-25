import ButtonAnimation from "../common/ButtonAnimation";
import { listFeature } from "../unit/ListItem";
import useScreenResize from "../hook/useScreenResize";

export default function FeatureTours() {
  const isMobile = useScreenResize();

  return (
    <>
      {!isMobile ? (
        <div
          style={{
            backgroundColor: "rgba(26, 84, 58, 0.9)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Images />
          <div style={{ textAlign: "center" }}>
            <TextLine size="2rem" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {listFeature.map((feature, index) => (
              <ButtonAnimation key={index} text={feature.name} />
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "rgba(26, 84, 58, 0.9)",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            flexDirection: "column",
          }}
        >
          <Images />
          <div style={{ textAlign: "center" }}>
            <TextLine size="1rem" />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {listFeature.map((feature, index) => (
              <ButtonAnimation key={index} text={feature.name} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function TextLine({ size }: { size: string }) {
  return (
    <>
      <p style={{ fontWeight: "bold", color: "white", fontSize: size }}>
        Hong Hao Travel is a travel company in <br /> Ha Giang, we specialize in
        organizing
        <br /> unforgettable tours to explore Ha Giang
        <br />
        loop but still focus on the pristine nature of nature.
      </p>
    </>
  );
}

function Images() {
  return (
    <>
      <img
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/images/H.PNG`}
        alt="logo"
        style={{
          position: "absolute",
          width: "auto",
          maxWidth: "150px",
          marginBottom: "20px",
          top: "10vh",
          zIndex: 2,
        }}
      />
      <img
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/images/MapHG.PNG`}
        alt="logo"
        style={{
          position: "absolute",
          width: "auto",
          maxWidth: "150px",
          marginBottom: "20px",
          top: "10vh",
        }}
      />
    </>
  );
}
