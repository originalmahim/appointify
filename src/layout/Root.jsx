import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="font-inter flex flex-col min-h-screen">
        <div className="flex-1 px-3 relative mx-auto grow">
          {/* add Navbar here */}
          <Outlet></Outlet>
        </div>
        {/* add footer here */}
      </div>
    </div>
  );
};

export default Root;
