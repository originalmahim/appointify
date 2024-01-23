import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../Container/Container";
import Blog from "./Blog";
import Lottie from "lottie-react";
import blogAnimation from './blogAnimation.json'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [isSeeMore, setIsSeeMore] = useState(false)
    const displayBlogs = isSeeMore ? blogs : blogs.slice(0, 6);
    const shouldShowSeeMoreButton = blogs.length > 6;

    //Effect for fetching the blog data
    useEffect(() => {
        axios.get('blogs.json',)
            .then(res => {
                console.log(res.data)
                setBlogs(res.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
        {/* Blog page banner */}
            <div className="h-[600px] w-full flex flex-col lg:flex-row md:flex-row justify-center items-center">
                <div className=" lg:pt-20 md:pt-28 pt-16 text-center">
                    <h2 className="text-3xl font-bold">Blogs</h2>
                </div>
                <div>
                    <Lottie animationData={blogAnimation} style={{ height: "300px", width: "auto" }}></Lottie>
                </div>
            </div>

            {/* all blogs */}
            <Container>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        displayBlogs.map(blog => <Blog key={blog._id} blogs={blogs} blog={blog}></Blog>)
                    }
                </div>
            </Container>

            {/* see more button */}
            <div className="text-center mt-6">
                {shouldShowSeeMoreButton && (
                    <button
                        className="w-max px-3 h-[44px] text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95"
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