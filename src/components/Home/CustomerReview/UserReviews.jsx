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
    <Container>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
        User Testimonials
      </h2>

      <div className="mt-8 grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayRatings.map((testimonial) => (
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
            className="w-max px-3 h-[44px] text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </Container>
  );
};

export default UserReviews;
