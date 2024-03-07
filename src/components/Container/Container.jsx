import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Container = ({ children }) => {

  const {pathname} = useLocation()
  const pathIsHomePage = pathname === "/"

  return (
    <section className={`max-w-[1800px] mx-auto  md:px-5 ${pathIsHomePage?"lg:px-20":""} px-2`}>
      {children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
