import { useLoaderData } from "react-router-dom";
import Container from "../Container/Container";
import { BiCalendarAlt, BiComment, BiLike, BiSolidLike } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import useBlogs from "../../hooks/useBlogs";
import { Helmet } from "react-helmet-async";
import SimilarCategory from "./SimilarCategory";
import OtherCategory from "./OtherCategory";
import { useCollapse } from "react-collapsed";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useUserData from "../../hooks/useUserData";
import toast, { Toaster } from "react-hot-toast";
import useComments from "../../hooks/useComments";
import useLikes from "../../hooks/useLikes";
import Comments from "./Comments";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { blogs } = useBlogs();
  const { comments, commentsRefetch } = useComments();
  const { likes, likesRefetch } = useLikes();
  const [userDB] = useUserData();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const similarBlogs = blogs?.filter(
    (b) => b.category === blog.category && b._id !== blog._id
  );

  const similarComments = comments?.filter((b) => b.blogId == blog._id);

  const similarLikes = likes?.filter((b) => b.blogId == blog._id);

  const likedId = likes?.find(
    (like) => like.blogId == blog._id && like.email == userDB.email
  );

  const handleLike = async () => {
    try {
      if (!likedId) {
        await axiosSecure.post("/likes", {
          blogId: blog._id,
          email: userDB.email,
        });

        likesRefetch();
      } else {
        await axiosSecure.delete(`/likes/${likedId._id}`);

        likesRefetch();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const onSubmit = async (data) => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    const comment = {
      blogId: blog?._id,
      userId: userDB?._id,
      title: blog?.title,
      comment: data?.comment,
      image: userDB?.photo,
      name: userDB?.name,
      email: userDB?.email,
      date: formattedDate,
    };

    const loadingToast = toast.loading("Adding comment...");

    try {
      const res = await axiosSecure.post("/comments", comment);
      if (res.status === 201) {
        toast.success("Comment added successfully!", { id: loadingToast });

        reset();
        commentsRefetch();
      } else {
        toast.error("Failed to add comment", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Failed to add comment", { id: loadingToast });
    }
  };

  function formatDate(date) {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <div>
      <div>
        <Toaster />
      </div>

      <Helmet>
        <title>Appointify | {blog.title}</title>
      </Helmet>

      <Container>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-10 pt-24 md:pt-28 lg:pt-32 xl:pt-36">
            <div className="md:col-span-2">
              <div>
                {/* category */}

                <div className="text-lg md:text-xl font-bold">
                  Category: <span className="text-head">{blog.category}</span>
                </div>

                {/* tags */}

                <div className="flex flex-wrap items-center gap-2 border-b-[3px] border-head pb-10 mt-4 mb-10">
                  {blog.tags.map((tag, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-semibold text-head bg-cardBG rounded-[4.5px] px-4 py-1.5">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>

                {/* author info */}

                <div className="flex items-center gap-2 mb-4">
                  {/* author image */}

                  <img
                    src={blog.author_info.author_image}
                    alt={blog.author_info.author_name}
                    className="rounded-full w-16 h-16"
                  />

                  <div>
                    {/* author name */}

                    <p className="font-semibold text-special">
                      {blog.author_info.author_name}
                    </p>

                    {/* author email */}

                    <p className="text-sm font-medium text-[#7c7c7c]">
                      {blog.author_info.author_email}
                    </p>
                  </div>
                </div>

                {/* title */}

                <h1 className="text-xl md:text-3xl font-semibold md:font-medium text-[#3c3c3c]">
                  {blog.title}
                </h1>

                {/* image */}

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-contain w-full mt-6"
                />

                <div className="flex justify-between items-center font-medium text-[#7c7c7c] bg-gray-100 px-4 md:px-6 py-2">
                  <div className="flex items-center gap-6 md:gap-10">
                    {/* likes */}

                    <button
                      onClick={handleLike}
                      className="flex items-center gap-1 text-sm md:text-base"
                    >
                      {likedId ? (
                        <BiSolidLike className="text-head md:text-lg" />
                      ) : (
                        <BiLike className="text-base md:text-lg" />
                      )}
                      <span>{similarLikes?.length}</span>
                    </button>

                    {/* comments */}

                    <button {...getToggleProps()}>
                      {isExpanded ? (
                        <p className="flex items-center gap-1 text-sm md:text-base">
                          <BiComment className="text-base md:text-lg" />
                          {similarComments?.length}
                        </p>
                      ) : (
                        <p className="flex items-center gap-1 text-sm md:text-base">
                          <BiComment className="text-base md:text-lg" />
                          {similarComments?.length}
                        </p>
                      )}
                    </button>
                  </div>

                  {/* publishing date */}

                  <p className="flex items-center gap-1 text-sm md:text-base">
                    <BiCalendarAlt className="text-base md:text-lg" />
                    {timeElapsed(blog.date)}
                  </p>
                </div>

                <section {...getCollapseProps()}>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-between items-end gap-4 border-2 border-gray-100 p-2"
                  >
                    <textarea
                      {...register("comment", { required: true })}
                      rows="3"
                      placeholder="Write Here..."
                      className="text-sm md:text-base outline-none w-full px-4 py-2"
                    />

                    <button className="text-dark hover:text-head text-2xl duration-500 pr-4">
                      <RiSendPlaneFill />
                    </button>
                  </form>
                </section>

                {/* content */}

                <div className="font-medium text-dark selection:bg-head/20 selection:text-head">
                  <p className="text-sm md:text-base leading-7 md:leading-8 mt-6">
                    {blog.intro}
                  </p>

                  <div>
                    {blog.main_content.map((content, idx) => (
                      <div key={idx}>
                        <p className=" md:text-lg font-semibold text-head leading-7 md:leading-8 mt-6">
                          {content.heading}
                        </p>
                        <p className="text-sm md:text-base leading-7 md:leading-8 mt-1">
                          {content.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <Comments id={blog._id} />
              </div>
            </div>

            <div className="space-y-10 sm:space-y-20 pt-20 sm:pt-0">
              {similarBlogs.length ? (
                <SimilarCategory id={blog._id} category={blog.category} />
              ) : (
                ""
              )}

              <OtherCategory category={blog.category} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
