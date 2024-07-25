import useScreenResize from "../hook/useScreenResize";
import { serviceList } from "../unit/ListItem";

export default function MotoBikeTours() {
  const isMobile = useScreenResize();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {!isMobile && (
        <>
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(26, 84, 58, 0.9)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <p
                style={{ fontWeight: "bold", color: "white", fontSize: "2rem" }}
              >
                Explore your journey with us
              </p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100vh",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ flexGrow: 1 }}></div>
              <div style={{ width: "50%" }}>
                <div>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        marginLeft: "10px",
                      }}
                    >
                      HONG HAO MOTOBIKE TOURS
                    </p>
                  </div>
                  <div>
                    <p style={{ color: "white", marginLeft: "10px" }}>
                      Experience the raw beauty of Ha Giang with our immersive
                      travel adventure. From rugged mountain landscapes to
                      stunning cityscapes, our adventure tours will take you on
                      a journey of exploration. Discover remote villages.
                    </p>
                  </div>
                  <div>
                    <ListItems />
                  </div>
                </div>
                <div>
                  <TwoButton />
                </div>
              </div>
              <div style={{ width: "50%" }}>
                <Images />
              </div>
            </div>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100vh",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(26, 84, 58, 0.9)",
            }}
          >
            <div style={{ width: "100%" }}>
              <div>
                <div>
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "white",
                      marginLeft: "10px",
                      fontSize: "1.5rem",
                    }}
                  >
                    HONG HAO MOTOBIKE TOURS
                  </p>
                </div>
                <div>
                  <p style={{ color: "white", marginLeft: "10px" }}>
                    Experience the raw beauty of Ha Giang
                    <br /> with our immersive travel adventure. From rugged
                    <br /> mountain landscapes to stunning cityscapes, our
                    <br /> adventure tours will take you on a journey of
                    exploration.
                    <br /> Discover remote villages.
                  </p>
                </div>
                <div>
                  <ListItems />
                </div>
              </div>
              <div>
                <TwoButton />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function TwoButton() {
  return (
    <>
      <button
        style={{
          backgroundColor: "red",
          color: "black",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        BOOK NOW
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "black",
          border: "none",
          padding: "10px 20px",
          borderRadius: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        CONTACT US
      </button>
    </>
  );
}

function Images() {
  return (
    <>
      <img
        loading="lazy"
        src={`${process.env.PUBLIC_URL}/images/sky.png`}
        alt="logo"
        style={{ top: "10vh", right: "1vw" }}
      />
    </>
  );
}

function ListItems() {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {serviceList.map((item, index) => (
        <li
          key={index}
          style={{
            color: "white",
            marginLeft: "10px",
            position: "relative",
            paddingLeft: "20px",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              color: "lightgreen",
              fontSize: "1.2rem",
              lineHeight: 1,
            }}
          >
            ✓
          </span>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
