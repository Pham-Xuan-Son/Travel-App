import { MenuItemProps } from ".";

interface TravelMenuProps {
  isMobile: boolean;
  menuList: MenuItemProps[];
  logoSrc: string;
}

export default function TravelMenu({
  isMobile,
  menuList,
  logoSrc,
}: TravelMenuProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: isMobile ? "100%" : "50%",
        height: "100%",
        backgroundColor: "rgba(26, 84, 58, 0.9)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: "1.5rem",
        padding: "20px",
        boxSizing: "border-box",
        zIndex: 1,
      }}
    >
      <img
        loading="lazy"
        src={logoSrc}
        alt="logo"
        style={{ width: "auto", maxWidth: "150px", marginBottom: "20px" }}
      />
      <ul style={{ listStyle: "none", padding: "0" }}>
        {menuList.map((item) => (
          <li key={item.name} style={{ marginBottom: "10px" }}>
            <a
              href={item.src}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
