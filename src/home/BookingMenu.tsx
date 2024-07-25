import React, { useCallback, useState } from "react";

interface BookingMenuProps {
  title: string;
  items: { id: string; name: string }[];
  onClick: () => void;
  isActive: boolean;
}

export default function BookingMenu({
  title,
  items,
  onClick,
  isActive,
}: BookingMenuProps) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = useCallback(
    (item: { id: string; name: string }) => () => {
      setSelectedItem(item);
    },
    []
  );

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        padding: "5px 10px",
        border: "1px solid #fff",
        borderRadius: "5px",
        backgroundColor: "#fff",
        width: "10vw",
        textAlign: "center",
        color: "black",
      }}
      onClick={onClick}
    >
      <div>
        <div>{title}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: isActive ? "block" : "none",
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "white",
            borderRadius: "5px",
            zIndex: 3,
          }}
        >
          {items.map(({ id, name }) => (
            <div
              key={id}
              style={{
                padding: "10px",
                color: "black",
                cursor: "pointer",
                textAlign: "left",
              }}
              onClick={handleItemClick({ id, name })}
            >
              {name}
            </div>
          ))}
        </div>
        <div>{selectedItem.name}</div>
        <div style={{ marginLeft: "15px" }}>▼</div>
      </div>
    </div>
  );
}
