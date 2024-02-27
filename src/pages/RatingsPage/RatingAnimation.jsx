import Lottie from "lottie-react";
import rating from "../../assets/rating.json";

const RatingAnimation = () => {
    return (
        <div className="w-full ">
            <Lottie animationData={rating} loop={true} />
        </div>
    );
};

export default RatingAnimation;