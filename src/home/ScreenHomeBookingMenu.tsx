import DropdownMenu from "./BookingMenu";
import {
  daysList,
  privateDrivingList,
  selfDrivingList,
  typeOfTourList,
} from "../unit/ListItem";

interface BookingMenuProps {
  activeMenu: string | null;
  handleMenuClick: (menu: string) => () => void;
}

export default function BookingMenu({
  activeMenu,
  handleMenuClick,
}: BookingMenuProps) {
  return (
    <>
      {" "}
      <DropdownMenu
        title="Days List"
        items={daysList.map(({ day, night }) => ({
          id: `day-${day}`,
          name: `${day} Day, ${night} Night`,
        }))}
        onClick={handleMenuClick("days")}
        isActive={activeMenu === "days"}
      />
      <DropdownMenu
        title="Type of Tour"
        items={typeOfTourList}
        onClick={handleMenuClick("typeOfTour")}
        isActive={activeMenu === "typeOfTour"}
      />
      <DropdownMenu
        title="Self Driving"
        items={selfDrivingList}
        onClick={handleMenuClick("selfDriving")}
        isActive={activeMenu === "selfDriving"}
      />
      <DropdownMenu
        title="Private Driving"
        items={privateDrivingList}
        onClick={handleMenuClick("privateDriving")}
        isActive={activeMenu === "privateDriving"}
      />
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </>
  );
}
