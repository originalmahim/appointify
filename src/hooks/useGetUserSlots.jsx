import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useAxiosPublic from "./useAxiosPublic";

const useGetUserSlots = () => {
  const { user, loading } = useAuth();
  const axios = useAxiosPublic();
  // console.log(user);
  const { data: userSlots, refetch } = useQuery({
    enabled: !loading,
    queryKey: ["user-slots-data", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/users/availability/${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });

  return {userSlots, refetch};
};

export default useGetUserSlots;
