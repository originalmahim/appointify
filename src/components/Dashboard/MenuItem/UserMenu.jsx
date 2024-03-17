import { AiFillHome, AiOutlineFieldTime } from "react-icons/ai";
import MenuItem from "../Sidebar/MenuItem";

const UserMenu = () => {
    
  return (
    <>
      <MenuItem address="user-home" icon={AiFillHome} label="User Home" />

      <MenuItem
        address="availability"
        icon={AiOutlineFieldTime}
        label="Availability"
      />
    </>
  );
};
export default UserMenu;
