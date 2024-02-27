import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiLike, BiComment, BiBookReader, BiCalendarAlt } from "react-icons/bi";
import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";

const Blog = ({ blog }) => {
  const { _id, image, title, intro, author_info, date, likes, reading_time } =
    blog;
  const { comments } = useComments();
  const { likes: totalLike } = useLikes();

  const similarComments = comments?.filter((b) => b.blogId == _id);

  const similarLikes = totalLike?.filter((b) => b.blogId == blog._id);

  const timeElapsed = (previous) => {
    const current = new Date();
    const previousDate = new Date(previous);
    const elapsed = current - previousDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="border-2 border-head hover:shadow-2xl rounded-xl duration-500 px-4 py-5">
      {/* blog image */}

      <img src={image} alt={title} className="rounded-lg" />

      <div className="flex justify-between items-center text-xs font-medium text-[#7c7c7c] mx-1 mt-2">
        <div className="flex items-center gap-4">
          {/* likes */}

          <p className="flex items-center gap-1">
            <BiLike className="text-sm" />
            {similarLikes?.length}
          </p>

          {/* comments */}

          <p className="flex items-center gap-1">
            <BiComment className="text-sm" />
            {similarComments?.length}
          </p>
        </div>

        {/* reading time */}

        <p className="flex items-center gap-1">
          <BiBookReader className="text-sm" />
          {reading_time}
        </p>
      </div>

      {/* author info */}

      <div className="sm:flex justify-between my-4">
        <div className="flex items-center gap-2">
          {/* author image */}

          <img
            src={author_info.author_image}
            alt={author_info.author_name}
            className="rounded-full w-12 h-12"
          />

          <div>
            {/* author name */}

            <p className="text-sm font-semibold text-special">
              {blog.author_info.author_name}
            </p>

            {/* author email */}

            <p className="text-sm text-[#7c7c7c]">
              {blog.author_info.author_email}
            </p>
          </div>
        </div>

        {/* publishing date */}

        <p className="flex items-center gap-1 text-xs font-medium text-[#7c7c7c] mt-2 sm:mt-0">
          <BiCalendarAlt className="text-sm" />
          {timeElapsed(date)}
        </p>
      </div>

      {/* blog title */}

      <Link to={`/blog/${_id}`}>
        <span className="md:text-lg font-semibold text-head hover:text-special duration-300">
          {title}
        </span>
      </Link>

      {/* blog intro */}

      <p className="text-sm text-[#6c6c6c] leading-6 mt-2">
        {intro.slice(0, 200)}...
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    intro: PropTypes.string,
    author_info: PropTypes.shape({
      author_image: PropTypes.string,
      author_name: PropTypes.string,
      author_email: PropTypes.string,
    }),
    date: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    reading_time: PropTypes.string,
  }).isRequired,
};

export default Blog;
