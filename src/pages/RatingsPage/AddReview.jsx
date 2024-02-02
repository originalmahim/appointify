import { Helmet } from "react-helmet-async";
import RatingForm from "../../components/Home/CustomerReview/RatingForm";

const AddReview = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Add Review</title>
      </Helmet>
      <section>
        <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-6">
          Add a Review
        </h1>
        <p className="text-center 2xl:text-lg text-sub-head font-medium mb-8 md:mb-12 lg:mb-14 xl:mb-16">
          Share your thoughts and experiences to inspire and guide others. Your
          review makes a difference and helps our community thrive.
        </p>
        <RatingForm />
      </section>
    </>
  );
};

export default AddReview;
