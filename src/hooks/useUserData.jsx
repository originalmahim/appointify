import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserData = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const { data: userDB, refetch } = useQuery({
    enabled: !loading,
    queryKey: ["user-Data", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return [userDB, refetch];
};

export default useUserData;
