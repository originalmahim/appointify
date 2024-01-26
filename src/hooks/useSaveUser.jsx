import useAxiosPublic from "./useAxiosPublic";

const useSaveUser = () => {
  const axiosPublic = useAxiosPublic();

  const saveUser = async (user) => {
    const newUser = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      status: "free",
      role: "user",
    };
    const { data } = await axiosPublic.post("/users", newUser);
    return data;
  };

  return saveUser;
};

export default useSaveUser;
