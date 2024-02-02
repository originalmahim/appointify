import { Helmet } from "react-helmet-async";
import { FaPlusCircle } from "react-icons/fa";

const UserHome = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | User Home</title>
      </Helmet>
      <section className="flex items-center justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">All Booking pages</h2>
        <h2 className="text-lg font-bold sm:text-xl inline-flex items-center">
          Create booking page
          <FaPlusCircle className="ml-1" />
        </h2>
      </section>
    </>
  );
};

export default UserHome;
