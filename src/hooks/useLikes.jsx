import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLikes = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: likes,
    isLoading,
    refetch: likesRefetch,
  } = useQuery({
    queryKey: ["likes"],
    queryFn: async () => {
      const { data } = await axiosSecure("/likes");
      return data;
    },
  });

  return { likes, isLoading, likesRefetch };
};

export default useLikes;
