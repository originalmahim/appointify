import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTransTackData = (endpoint, key) => {
  const axios = useAxiosPublic();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(endpoint);
      return data;
    } catch (error) {
      throw new Error(
        `Failed to fetch data from ${endpoint}: ${error.message}`
      );
    }
  };

  return useQuery({
    queryKey: [key],
    queryFn: fetchData,
    // Consider adding dependencies like [axios, endpoint, key] to the dependency array
  });
};

export default useTransTackData;
