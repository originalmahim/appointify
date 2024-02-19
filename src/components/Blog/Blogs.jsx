import { useState } from "react";
import Container from "../Container/Container";
import Blog from "./Blog";
import useBlogs from "../../hooks/useBlogs";
import Select from "react-select";

const options = [
  { value: "latest", label: "Latest" },
  { value: "old", label: "Old" },
  { value: "mostPopular", label: "Most Popular" },
  { value: "leastPopular", label: "Least Popular" },
];

const Blogs = () => {
  const { blogs } = useBlogs();
  const [seeBlogs, setSeeBlogs] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(options[0].value);
  ("latest");
  const [selectedCategory, setSelectedCategory] = useState(null);

  let filteredBlogs = blogs?.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedCategory && selectedCategory?.value !== "all") {
    filteredBlogs = filteredBlogs?.filter(
      (blog) => blog?.category === selectedCategory?.value
    );
  }

  switch (sortBy) {
    case "old":
      filteredBlogs?.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "mostPopular":
      filteredBlogs?.sort((a, b) => b.likes - a.likes);
      break;
    case "leastPopular":
      filteredBlogs?.sort((a, b) => a.likes - b.likes);
      break;
    default:
      filteredBlogs?.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  const seeMoreBlogs = () => {
    setSeeBlogs((prevSeeBlogs) => prevSeeBlogs + 6);
  };

  const seeLessBlogs = () => {
    setSeeBlogs((prevSeeBlogs) => prevSeeBlogs - 6);
  };

  return (
    <div className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-6 px-2 xl:px-2.5 mb-6">
          {/* Search Bar */}

          <div className="bg-white w-full">
            <form>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Blog Here..."
                className="border-2 focus:border-head hover:border-head outline-none rounded-md duration-500 w-full px-5 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Sort By */}

          <div className="flex flex-row justify-between gap-4 bg-white">
            {/* Sort by option */}

            <div className="text-sm w-full md:min-w-40">
              <Select
                options={options}
                value={options.find((option) => option.value === sortBy)}
                onChange={(selectedOption) => setSortBy(selectedOption.value)}
              />
            </div>

            {/* Sort by category */}

            <div className="text-sm w-full md:min-w-40">
              <Select
                options={[
                  { value: "all", label: "All Categories" },
                  ...[...new Set(blogs?.map((blog) => blog?.category))].map(
                    (category) => ({
                      value: category,
                      label: category,
                    })
                  ),
                ]}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>

        {/* Blog Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-4 px-2 2xl:px-3">
          {filteredBlogs?.slice(0, seeBlogs).map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </Container>

      {/* See More Button */}

      {seeBlogs < filteredBlogs?.length && (
        <div className="text-center mt-6">
          <button
            className="px-10 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
            onClick={seeMoreBlogs}
          >
            See More
          </button>
        </div>
      )}

      {/* See Less Button */}

      {seeBlogs > 6 && (
        <div className="text-center mt-6">
          <button
            className="px-10 h-12 text-white font-semibold bg-gradient-blue rounded-lg cursor-pointer hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
            onClick={seeLessBlogs}
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
