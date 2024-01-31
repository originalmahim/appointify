import { useState } from "react";
import { useEffect } from "react";
import Container from "../../Container/Container";
import ReviewCard from "./ReviewCard";

const UserReviews = () => {
  const [expanded, setExpanded] = useState(false);

  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("reviews.json");
        const data = await response.json();
        setRatings(data);
        // console.log(data);
      } catch (error) {
        console.log("there was an error: ", error);
      }
    };
    fetchData();
  }, []);

  //how many ratings to show
  const displayRatings = expanded ? ratings : ratings.slice(0, 3);

  // Check if there are 3 or fewer ratings
  const shouldShowSeeMoreButton = ratings.length > 3;

  return (
    <section className="max-w-[1400px] mx-auto mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <Container>
        <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-8 md:mb-12 lg:mb-14 xl:mb-16 dark:text-slate-300">
          User Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRatings?.map((testimonial) => (
            <ReviewCard
              key={testimonial?.reviewID}
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
            <button
              className="px-4 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          )}
        </div>
      </Container>
    </section>
  );
};

export default UserReviews;
