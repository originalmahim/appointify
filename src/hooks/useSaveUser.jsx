import useAxiosPublic from "./useAxiosPublic";

const useSaveUser = () => {
  const axiosPublic = useAxiosPublic();

  // initial weekly schedule 
  const weekSchedule = [
    {day:"Monday}",  slots: [] },
    {day:"Tuesday}",  slots: [] },
    {day:"Wednesday}",  slots: [] },
    {day:"Thursday}",  slots: [] },
    {day:"Friday}",  slots: [] },
    {day:"Saturday}",  slots: [] },
    {day:"Sunday}",  slots: [] }
  ]


  const saveUser = async (user) => {
    const newUser = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      status: "free",
      role: "user",
      weekSchedule
    };
    const { data } = await axiosPublic.post("/users", newUser);
    return data;
  };

  return saveUser;
};

export default useSaveUser;
