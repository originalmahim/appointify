import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const TABLE_HEAD = ["Email", "Registration Time"];

const Subscriptions = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axiosSecure("/newsletters");
      setUsers(response.data.result);
      setLoading(false);
      console.log(response.data.result);
    };
    fetchUsers();
  }, [axiosSecure]);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner text-info mt-24 md:mt-32 lg:mt-36 xl:mt-40"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Dashboard | Subscriptions</title>
      </Helmet>
      <section className="overflow-x-auto">
        <table className="w-full min-w-max table-auto text-center">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-cardBG p-4"
                >
                  <Typography
                    color="blue-gray"
                    className="font-semibold leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                  <tr key={user._id} >
                    <td className="border-b border-gray-300 p-4">
                      <Typography variant="small" color="blue-gray">
                        {user.email}
                      </Typography>
                    </td>
                    <td className="border-b border-gray-300 p-4">
                      <Typography variant="small" color="blue-gray">
                        {user.registrationTime}
                      </Typography>
                    </td>
                  </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Subscriptions;
