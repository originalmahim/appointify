import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PopularBlog = ({ blog }) => {
  //destructuring object properties
  const { _id, bloggerName, bloggerImage, blogTitle } = blog;

  return (
    <Link to={`/blog/${_id}`}>
      <div className="card border-[1px] border-gray-300 rounded-xl min-w-[310px] h-32 p-4 space-y-3">
        {/* blog title*/}
        <h2 className="text-sm font-medium text-gray-500">
          {blogTitle?.slice(0, 30)}...
        </h2>
        {/* blog author details */}
        <div className="flex justify-start gap-4">
          <div className="">
            <img src={bloggerImage} alt="" className="w-8 h-8 rounded-full" />
          </div>
          <div>
            <h4>{bloggerName}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

PopularBlog.propTypes = {
  blog: PropTypes.shape({
    _id: PropTypes.string,
    bloggerImage: PropTypes.string,
    bloggerName: PropTypes.string,
    publishingDate: PropTypes.string,
    blogTitle: PropTypes.string,
  }).isRequired,
};

export default PopularBlog;
