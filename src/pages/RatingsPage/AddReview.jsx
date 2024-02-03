import { Helmet } from "react-helmet-async";
import RatingForm from "../../components/Home/CustomerReview/RatingForm";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import ReviewCard from "../../components/Home/CustomerReview/ReviewCard";

const AddReview = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [existingReview, setExistingReview] = useState(false);
  const [rating, setRating] = useState({});

  const { email, photoURL, displayName } = user;

  //check if user has already submitted a review
  useEffect(()=>{
    axiosPublic.get(`/ratings/${email}`).then((res)=>{
      if(res.data.message){
        setExistingReview(true)
        setRating(res.data.result);
      }
    }).catch((err)=>{
      console.log(err); 
    })
  },[axiosPublic, email])

  const handleRating = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const message = form.message.value;
    const timeStamp = new Date();
    const ratingInfo = {
      email,
      photoURL,
      displayName,
      rating,
      message,
      timeStamp,
    };

    axiosPublic.post("ratings", ratingInfo).then((res) => {
      if (res.data.message) {
        toast.success("Your review was added successfully!");
        setExistingReview(true);
      }
    });
  };

  if(existingReview){
    return(
    <>
      <Helmet>
        <title>Dashboard | Add Review</title>
      </Helmet>
      <section>
        <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-6">
          Thank You for your Review
        </h1>
        <p className="text-center 2xl:text-lg text-sub-head font-medium mb-8 md:mb-12 lg:mb-14 xl:mb-16">
          Your Review:
        </p>
        <div className="max-w-fit m-auto">
        <ReviewCard
            image={rating.photoURL}
            name={rating.displayName}
            rating={rating.rating}
            content={rating.message}
            timeStamp={rating.timeStamp}
          />
        </div>
      </section>
    </>
    )
  }

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
        <RatingForm handleRating={handleRating} />
      </section>
    </>
  );
};

export default AddReview;
