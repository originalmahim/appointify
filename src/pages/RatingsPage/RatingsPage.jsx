import { Helmet } from "react-helmet-async";

const RatingsPage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Ratings</title>
      </Helmet>
      <div className="p-2 max-w-3xl mx-auto pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-6">
        User Ratings
      </h1>
      <p className="text-center 2xl:text-lg text-sub-head font-medium mb-8 md:mb-12 lg:mb-14 xl:mb-16">
          Explore the feedback and ratings from our valued customers. Your
          satisfaction is our priority, and we appreciate the trust you place in
          Appointify. Read what others have to say about their experiences.
        </p>
      </div>
    </>
  );
};

export default RatingsPage;
