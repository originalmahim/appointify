import { Helmet } from "react-helmet-async";

const AdminHome = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Admin Home</title>
      </Helmet>
      <section>
        <h2 className="text-2xl font-bold sm:text-3xl text-center">
          Welcome to Admin Home.
        </h2>
      </section>
    </>
  );
};

export default AdminHome;
