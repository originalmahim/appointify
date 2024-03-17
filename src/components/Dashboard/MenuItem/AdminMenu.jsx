import { AiFillHome } from "react-icons/ai";
import MenuItem from "../Sidebar/MenuItem";

const AdminMenu = () => {
    return (
      <>
        <MenuItem address="admin-home" icon={AiFillHome} label="Admin Home" />
        <MenuItem address="manage-user" icon={AiFillHome} label="Admin Home" />
      </>
    );
};
export default AdminMenu;