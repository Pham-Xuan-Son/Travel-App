import useScreenResize from "../hook/useScreenResize";
import TravelMenu from "./TravelMenu";
import ScreenButton from "../common/ScreenButton";
export interface MenuItemProps {
  name: string;
  src: string;
}

const menuList: MenuItemProps[] = [
  { name: "Home", src: "/Travel-App" },
  { name: "About Us", src: "" },
  { name: "Tours", src: "" },
  { name: "Activity", src: "" },
  { name: "Destination", src: "" },
  { name: "Blog", src: "" },
  { name: "FAQ", src: "" },
  { name: "Contact", src: "" },
];

export default function Menu() {
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
          <img
            loading="lazy"
            src={`${process.env.PUBLIC_URL}/images/HaGiang02.png`}
            alt="Image 2"
            style={{
              width: isMobile ? "100%" : "50%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <TravelMenu
            isMobile={isMobile}
            menuList={menuList}
            logoSrc={`${process.env.PUBLIC_URL}/images/HostelLogo.png`}
          />
          <img
            loading="lazy"
            src={`${process.env.PUBLIC_URL}/images/HaGiang01.png`}
            alt="Image 1"
            style={{
              width: isMobile ? "100%" : "50%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </>
      )}
      {isMobile && (
        <>
          <TravelMenu
            isMobile={isMobile}
            menuList={menuList}
            logoSrc={`${process.env.PUBLIC_URL}/images/HostelLogo.png`}
          />
          <ScreenButton />
        </>
      )}
    </div>
  );
}
