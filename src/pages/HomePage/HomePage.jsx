import { Helmet } from "react-helmet-async";
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
      <FeatureOverview />
        <UserReviews />
            <NewsLetter></NewsLetter>
      </section>
    </>
  );
};

export default HomePage;
