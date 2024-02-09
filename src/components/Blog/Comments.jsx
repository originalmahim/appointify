import useComments from "../../hooks/useComments";

const Comments = ({ id }) => {
  const { comments } = useComments();

  const showComments = comments?.filter((comment) => comment.blogId == id);

  const calculateTimeDifference = (date) => {
    const dateString = date.split(" at ")[0];

    const commentDate = new Date(dateString);

    if (isNaN(commentDate.getTime())) {
      return "Invalid date";
    }

    const currentDate = new Date();
    const difference = currentDate - commentDate;

    const seconds = Math.floor(difference / 1000);
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
    <div>
      <h3 className="border-b-[3px] border-head/10 pb-1">
        <span className="text-xl md:text-2xl font-medium text-head border-b-[3px] border-head pb-1.5">
          Comments
        </span>
      </h3>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-20 mt-10">
        {showComments?.map((comment, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center gap-2">
              <div className="flex items-center gap-3">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="rounded-full w-16 sm:w-12 h-16 sm:h-12"
                />

                <div>
                  <p className="font-semibold text-head">{comment.name}</p>

                  <p className="text-sm font-medium text-dark">
                    {comment.email}
                  </p>

                  <p className="sm:hidden text-xs font-semibold text-dark">
                    {calculateTimeDifference(comment.date)}
                  </p>
                </div>
              </div>

              <p className="hidden sm:block text-xs font-semibold text-dark">
                {calculateTimeDifference(comment.date)}
              </p>
            </div>

            <p className="text-xs md:text-sm font-medium text-[#7c7c7c] mt-4">
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
