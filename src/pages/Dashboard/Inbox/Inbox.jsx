import { Helmet } from "react-helmet-async";
import TableRow from "../../../components/Inbox/TableRow";
import useGetMessages from "../../../hooks/useGetMessages";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Email", "Message", "Actions"];

const Inbox = () => {
  const { messages, refetch } = useGetMessages();

  return (
    <>
      <Helmet>
        <title>Dashboard | Inbox</title>
      </Helmet>
      <section className="overflow-x-auto">
        <Card className="w-full h-full">
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
              {messages?.map((mess, index) => {
                const isLast = index === messages.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                return (
                  <TableRow
                    key={index}
                    classes={classes}
                    mess={mess}
                    refetch={refetch}
                  ></TableRow>
                );
              })}
            </tbody>
          </table>
        </Card>
      </section>
    </>
  );
};

export default Inbox;
