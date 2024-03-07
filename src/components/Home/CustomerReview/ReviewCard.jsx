/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

import { useState } from "react";

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleString("en-US", options);
};

const ReviewCard = ({ image, name, rating, content, timeStamp }) => {
  const formattedTime = formatTimestamp(timeStamp);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div >
      <blockquote
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-lg border
        bg-white p-4  transition duration-300  transform hover:shadow-xl hover:shadow-[#ffecf3] hover:-translate-y-2 cursor-pointer">
        <div className="flex gap-3  ">
          <img
            alt={name}
            src={image}
            className="h-9 w-9 rounded-full object-cover"
          />

          <div>

            <div className="">
            <h2 className=" text-[13px] md:text-[16px] font-semibold">{name}</h2>    
              <div className={`transition-all delay-300 ${isHovered?"visible opacity-100":"opacity-0 invisible"}`}>
            
                <p className="text-[9px] absolute right-2 top-3 p-2 text-light-gray">{formattedTime?.slice(0,12)}</p>

              </div>

            </div>
            {/* rating stars  */}
            <div className="flex  my-1 text-yellow-900 hover:text-inherit">
              {Array.from({ length: rating }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}


              
            </div>
           
          </div>
        </div>

        <p className=" text-light-gray text-[12px] md:text-[14px] pt-2 leading-[23px]">
          {content.length > 100 ? <>{content.slice(0, 100)} ...</> : content}
        </p>

      </blockquote>
    </div>
  );
};

// ReviewCard.propTypes = {
//   image: PropTypes.string,
//   name: PropTypes.string,
//   rating: PropTypes.string || PropTypes.number,
//   content: PropTypes.string,
//   timeStamp: PropTypes.string,
// };

export default ReviewCard;
