import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Home</title>
      </Helmet>

      <section>
        <Banner />
      </section>
    </>
  );
};

export default HomePage;
