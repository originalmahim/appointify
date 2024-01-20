import { Helmet } from "react-helmet-async";
import Banner from "../../components/Home/Banner/Banner";
import FeatureOverview from "../../components/Home/FeatureOverview/FeatureOverview";
import UserReviews from "../../components/Home/CustomerReview/UserReviews";
import NewsLetter from "../../components/Home/Contacts/NewsLetter";

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
        <NewsLetter />
      </section>
    </>
  );
};

export default HomePage;
