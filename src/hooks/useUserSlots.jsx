import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUserSlots = () => {
  // const { user, loading } = useAuth();
  const axios = useAxiosPublic();
  // console.log(user);
  const { data: availAbleSlots, refetch } = useQuery({
    // enabled: !loading,
    queryKey: ["user-slots", "shakil"],
    queryFn: async () => {
      const res = await axios.get(`/users/availability/shakilahmmed8882@gmail.com`);
      // console.log(res.data);
      return res.data;
    },
  });

  return {availAbleSlots, refetch}
};

export default useUserSlots;
