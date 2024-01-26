import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: admin, isLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/admin/${user.email}`);
      return response.data;
    },
  });
  return [admin, isLoading];
};

export default useAdmin;
