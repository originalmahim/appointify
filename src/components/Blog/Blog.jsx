import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
    
    //destructuring object properties
    const { _id,bloggerName, bloggerImage, publishingDate, blogTitle } = blog

    // // create a function for set the date time formate
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

    //call the function
    const formattedTime = formatTimestamp(publishingDate);

    return (
        
       <Link to={`/blog/${_id}`}>
        <div className="card border-[1px] border-gray-300 rounded-xl max-w-[550px] h-32 p-4 space-y-3">
            {/* blog title*/}
            <h2 className="text-sm font-medium text-gray-500">{blogTitle?.slice(0,60)}...</h2>
            {/* blog author details */}
            <div className="flex justify-start gap-4">
                <div className="">
                    <img src={bloggerImage} alt="" className="w-12 h-12 rounded-full"/>
                </div>
                <div>
                    <h4>{bloggerName}</h4>
                    <p>{formattedTime}</p>
                </div>
            </div>
        </div>
       </Link>
    );
};

// proptypes validation
Blog.propTypes = {
    blog: PropTypes.shape({
        _id: PropTypes.number,
        bloggerImage: PropTypes.string,
        bloggerName: PropTypes.string,
        publishingDate: PropTypes.string,
        blogTitle: PropTypes.string,
    }).isRequired,
};


export default Blog;