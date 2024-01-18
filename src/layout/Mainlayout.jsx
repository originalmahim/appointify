import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div>
      {/*add Navbar here */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* add footer here */}
    </div>
  );
};

export default Mainlayout;
