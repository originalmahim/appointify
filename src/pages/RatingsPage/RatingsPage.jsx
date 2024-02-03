import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import ReviewCard from "../../components/Home/CustomerReview/ReviewCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const RatingsPage = () => {
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const url = `/ratings`;
  useEffect(() => {
    axiosPublic.get(url).then((res) => {
      setRatings(res.data);
      setIsLoading(false);
    });
  }, [axiosPublic, url]);

  //return spinner while fetching data
  if (isLoading)
    return (
      <div className="w-full text-center pt-36">
        <span className="loading loading-spinner loading-lg text-success text-5xl "></span>
      </div>
    );
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
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings?.map((testimonial) => (
            <ReviewCard
              key={testimonial?._id}
              image={testimonial?.photoURL}
              name={testimonial?.displayName}
              rating={parseInt(testimonial?.rating)}
              content={testimonial?.message}
              timeStamp={testimonial?.timeStamp}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default RatingsPage;
