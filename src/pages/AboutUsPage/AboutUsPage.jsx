import { Helmet } from "react-helmet-async";
import Banner from "../../components/AboutUs/Banner";
import State from "../../components/AboutUs/State";
import OurStory from "../../components/AboutUs/OurStory";
import Meet from "../../components/AboutUs/Meet";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | About Us</title>
      </Helmet>

      <section>
        <Banner />
        <State />
        <OurStory />
        <Meet />
      </section>
    </>
  );
};

export default AboutUsPage;
