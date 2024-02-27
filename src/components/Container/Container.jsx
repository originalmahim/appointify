import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <section className="max-w-[1800px] mx-auto  md:px-5 px-2">
      {children}
    </section>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
