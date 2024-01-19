import { Helmet } from "react-helmet-async";
import NewsLetter from "../../components/contacts/NewsLetter";
import UserReviews from "../../components/customerReview/UserReviews";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Home</title>
      </Helmet>
      <section>
        <UserReviews />
            <NewsLetter></NewsLetter>
      </section>
    </>
  );
};

export default HomePage;
