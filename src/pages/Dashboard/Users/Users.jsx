import { IconButton, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UserRow from "../../../components/Users/UserRow";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const TABLE_HEAD = ["Name", "Email", "Status", "Role"];

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [active, setActive] = useState(1);

  const { data: count = 0 } = useQuery({
    queryKey: ["userCount", axiosSecure],
    queryFn: async () => {
      const { data } = await axiosSecure("/users/count");
      return data?.count;
    },
  });

  const pageCount = Math.ceil(count / 10);

  const { data: users, refetch } = useQuery({
    queryKey: ["users", axiosSecure, active],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users?active=${active}`);
      return data;
    },
  });

  const next = () => {
    if (active === pageCount) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

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
        <div className="flex items-center gap-8 absolute bottom-10 left-1/2 transform -translate-x-1/2 md:-translate-x-0">
          <IconButton
            size="sm"
            variant="outlined"
            onClick={prev}
            disabled={active === 1}
          >
            <FaArrowLeft stroke="2" className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal min-w-[84px]">
            Page <strong className="text-gray-900">{active}</strong> of{" "}
            <strong className="text-gray-900">{pageCount}</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={next}
            disabled={active === pageCount}
          >
            <FaArrowRight stroke="2" className="h-4 w-4" />
          </IconButton>
        </div>
      </section>
    </>
  );
};

export default Users;
