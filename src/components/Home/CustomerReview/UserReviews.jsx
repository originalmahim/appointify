import { useState } from "react";
import { useEffect } from "react";
import Container from "../../Container/Container";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UserReviews = () => {
  const [ratings, setRatings] = useState([]);
  const axiosPublic = useAxiosPublic();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("reviews.json");
  //       const data = await response.json();
  //       setRatings(data);
  //       // console.log(data);
  //     } catch (error) {
  //       console.log("there was an error: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const url = `/ratings`;
  useEffect(() => {
    axiosPublic.get(url).then((res) => {
      setRatings(res.data.result);
    });
  }, [axiosPublic, url]);

  //how many ratings to show
  const displayRatings = ratings?.slice(0, 3);

  // Check if there are 3 or fewer ratings
  const shouldShowSeeMoreButton = ratings?.length > 3;

  return (
    <section className="max-w-[1400px] mx-auto mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <Container>
        <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-8 md:mb-12 dark:text-slate-300">
          User Testimonials
        </h1>
        <p className="text-center antialiased text-xl leading-relaxed text-inherit mt-2 mb-10 md:mb-16">
          Discover why our clients loves our services.  
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRatings?.map((testimonial) => (
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

        <div className="text-center mt-6">
          {shouldShowSeeMoreButton && (
            <Link to={"/ratings"}>
              <button className="px-4 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95">
                {"See More"}
              </button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
};

export default UserReviews;
