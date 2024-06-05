import { Outlet } from "react-router-dom";
import NavBarGuest from "./NavBarGuest";

const LayoutGuest = () => {
  return (
    <div>
      <NavBarGuest />
      <Outlet />
    </div>
  );
};

export default LayoutGuest;
