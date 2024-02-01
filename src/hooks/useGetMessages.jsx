import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetMessages = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: messages,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data } = await axiosSecure("/messages");
      return data;
    },
  });

  return { messages, isLoading, refetch };
};

export default useGetMessages;
