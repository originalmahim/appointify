import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useComments = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: comments,
    isLoading,
    refetch: commentsRefetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const { data } = await axiosSecure("/comments");
      return data;
    },
  });

  return { comments, isLoading, commentsRefetch };
};

export default useComments;
