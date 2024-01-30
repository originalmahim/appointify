import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import Blog from "./Blog";
import Lottie from "lottie-react";
import blogAnimation from "./blogAnimation.json";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isSeeMore, setIsSeeMore] = useState(false);
  const displayBlogs = isSeeMore ? blogs : blogs.slice(0, 6);
  const shouldShowSeeMoreButton = blogs.length > 6;

  //Effect for fetching the blog data
  useEffect(() => {
    axios
      .get("blogs.json")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* Blog page banner */}
      <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center pt-24 md:pt-28 lg:pt-32 xl:pt-36 mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        <div className="pt-10 md:pt-12 lg:pt-14 xl:pt-20">
          <h1 className="text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold">
            Blogs
          </h1>
        </div>
        <div>
          <Lottie
            animationData={blogAnimation}
            style={{ height: "300px", width: "auto" }}
          ></Lottie>
        </div>
      </div>

      {/* all blogs */}
      <Container>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 max-w-[2250px]">
          {displayBlogs.map((blog) => (
            <Blog key={blog._id} blogs={blogs} blog={blog}></Blog>
          ))}
        </div>
      </Container>

      {/* see more button */}
      <div className="text-center mt-10">
        {shouldShowSeeMoreButton && (
          <button
            className="px-4 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
            onClick={() => setIsSeeMore(!isSeeMore)}
          >
            {isSeeMore ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </>
  );
};

export default Blogs;
