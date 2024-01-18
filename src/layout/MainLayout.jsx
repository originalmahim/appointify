import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section>
      {/* add nav */}
      <div>
        <Outlet />
      </div>
      {/* add footer */}
    </section>
  );
};

export default MainLayout;
