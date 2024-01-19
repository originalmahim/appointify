import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import FeatureOverview from "../../components/FeatureOverview/FeatureOverview";
import NewsLetter from "../../components/contacts/NewsLetter";
import UserReviews from "../../components/customerReview/UserReviews";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Home</title>
      </Helmet>

      <section>
        <Banner />
        <FeatureOverview />
        <UserReviews />
        <NewsLetter></NewsLetter>
      </section>
    </>
  );
};

export default HomePage;
