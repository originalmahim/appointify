import { Helmet } from "react-helmet-async";
import UserReviews from "../../components/customerReview/UserReviews";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Home</title>
      </Helmet>
      <section>
        <UserReviews />
      </section>
    </>
  );
};

export default HomePage;
