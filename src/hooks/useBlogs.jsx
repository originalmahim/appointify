import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBlogs = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosSecure("/blogs");
      return data;
    },
  });

  return { blogs, isLoading, refetch };
};

export default useBlogs;
