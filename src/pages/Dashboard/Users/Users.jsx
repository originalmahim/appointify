import { Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UserRow from "../../../components/Users/UserRow";

const TABLE_HEAD = ["Name", "Email", "Status", "Role"];

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users, refetch } = useQuery({
    queryKey: ["users", axiosSecure],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Dashboard | Users</title>
      </Helmet>
      <section className="overflow-x-auto">
        <table className="w-full min-w-max table-auto text-left">
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
            {users?.map((user, index) => {
              const isLast = index === users.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

              return (
                <UserRow
                  key={index}
                  classes={classes}
                  user={user}
                  refetch={refetch}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Users;
