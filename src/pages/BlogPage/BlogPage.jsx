import { Helmet } from "react-helmet-async";
import Blogs from "../../components/Blog/Blogs";

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Blogs</title>
      </Helmet>
      <section>
        <Blogs />
      </section>
    </>
  );
};

export default BlogPage;
