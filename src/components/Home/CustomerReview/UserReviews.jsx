import { useState } from "react";
import { useEffect } from "react";
import Container from "../../Container/Container";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import TitleAndDescription from "../../TiteleAndDescription/TitleAndDescription";

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
  const displayRatings = ratings?.slice(0, 6);

  // Check if there are 3 or fewer ratings
  const shouldShowSeeMoreButton = ratings?.length > 3;

  return (
    <section className="  
     py-8">
      <Container>
        <div className="text-center">
        <TitleAndDescription
        title={"User Testimonials"}
        description={"Discover why our clients loves our services."}
        type={"h2"}
        />
        </div>

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
              <button className="text-primary">
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
