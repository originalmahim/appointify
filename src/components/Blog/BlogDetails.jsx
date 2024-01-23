import { useLoaderData, useParams } from "react-router-dom";
import Container from "../Container/Container";
import './style.css'
import PopularBlog from "./PopulaBlog";
import { FaComment, FaHeart } from "react-icons/fa";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams()
    const blog = blogs.find(blog => blog._id == id)
    // console.log(blogs)
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
    const formattedTime = formatTimestamp(blog.publishingDate);
    return (
        // blog details
        <Container>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center">
                <div className="flex flex-col min-h-content gap-6 lg:mr-6 md:mr-6">
                    <div className="space-y-4 border-[1px] border-gray-300 rounded-xl mt-24 flex-1 p-4">
                        <h2 className="text-xl font-bold">{blog?.blogTitle}</h2>
                        {/* blog author details */}
                        <div className="flex justify-between items-center gap-2">
                            <div className="flex justify-start gap-4">
                                <div className="">
                                    <img src={blog.bloggerImage} alt="" className="w-12 h-12 rounded-full" />
                                </div>
                                <div>
                                    <h4>{blog.bloggerName}</h4>
                                    <p>{formattedTime}</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="flex justify-center items-center gap-2">
                                    <FaHeart className="text-red-400"></FaHeart>
                                    <span>0</span>
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <FaComment className="text-blue-400"></FaComment> <span>0</span>
                                </div>
                            </div>
                        </div>
                        <div className="blogDiv space-y-4"
                            dangerouslySetInnerHTML={{ __html: blog?.blogContent }}
                        />

                    </div>
                    <div>
                        <form className="flex gap-2">
                            <div className="flex-1">
                                <textarea placeholder="Write your comments..." type="text" className="input input-bordered border-[1px] border-gray-300 w-full" />
                            </div>
                            <div className="">
                                <input type="submit" value="Comment" className="btn btn-outline border-gray-300" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="lg:mt-24 md:mt-24 mt-6 w-[350px]">
                    <div className="flex flex-col gap-2">
                        {
                            blogs.map(blog => <PopularBlog key={blog._id} blogs={blogs} blog={blog}></PopularBlog>)
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlogDetails;