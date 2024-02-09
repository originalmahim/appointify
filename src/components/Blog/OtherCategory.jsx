import { BiComment, BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import useBlogs from "../../hooks/useBlogs";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./scrollbar.css";
import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";

const OtherCategory = ({ category }) => {
  const { blogs } = useBlogs();
  const { comments, commentsRefetch } = useComments();
  const { likes, likesRefetch } = useLikes();

  const otherBlogs = blogs.filter((other) => other.category !== category);

  const similarComments = comments?.filter(
    (b) => b.blogId == blogs.map((x) => x._id)
  );

  const similarLikes = likes?.filter(
    (b) => b.blogId == blogs.map((x) => x._id)
  );

  const timeElapsed = (previous) => {
    const current = new Date();
    const previousDate = new Date(previous);
    const elapsed = current - previousDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  };

  return (
    <div>
      <h3 className="border-b-[3px] border-head/10 pb-1">
        <span className="text-xl md:text-2xl font-medium text-head border-b-[3px] border-head pb-1.5">
          Other Categories
        </span>
      </h3>

      <div className="scrollbarHide hidden sm:flex flex-col gap-8 overflow-y-scroll max-h-[90vh] mt-6">
        {otherBlogs.map((other, idx) => (
          <div key={idx}>
            <img src={other.image} alt={other.title} className="w-full" />

            <div className="mt-1 px-1">
              <div className="flex justify-between items-center text-xs lg:text-sm text-dark font-medium mb-2">
                <p>{timeElapsed(other.date)}</p>

                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="flex items-center gap-1">
                    <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                      <BiLike />
                    </p>

                    <span>
                      <span>{similarLikes?.length}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                      <BiComment />
                    </p>

                    <span>
                      <span>{similarComments?.length}</span>
                    </span>
                  </div>
                </div>
              </div>

              <Link to={`/blog/${other._id}`}>
                <span className="font-semibold text-head hover:text-special duration-300">
                  {other.title}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mt-10"
        >
          {otherBlogs.map((other, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <img src={other.image} alt={other.title} className="w-full" />

              <div className="mt-1 px-1">
                <div className="flex justify-between items-center text-xs lg:text-sm font-medium text-dark mb-2">
                  <p>{timeElapsed(other.Date)}</p>

                  <div className="flex items-center gap-2 lg:gap-4">
                    <div className="flex items-center gap-1">
                      <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                        <BiLike />
                      </p>
                      <span>
                        <span>{similarLikes?.length}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <p className="hover:text-primary duration-500 cursor-pointer pr-0.5">
                        <BiComment />
                      </p>

                      <span>
                        <span>{similarComments?.length}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <Link to={`/blog/${other._id}`}>
                  <span className="text-sm md:text-base font-semibold text-head hover:text-special duration-300">
                    {other.title}
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OtherCategory;
