import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";

const UserRow = ({ classes, user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { _id, name, email, status, role } = user || {};

  const handleMakeAdmin = async () => {
    const { data } = await axiosSecure.patch(`/users/${_id}`);
    if (data?.modifiedCount > 0) {
      toast.success("Updated to Admin!", {
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
        },
      });
      setIsOpen(false);
      refetch();
    }
  };

  return (
    <tr className="hover:bg-gray-100 transition duration-300">
      <td className={classes}>
        <Typography variant="small" color="blue-gray">
          {name}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray">
          {email}
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray">
          {status}
        </Typography>
      </td>
      <td className={classes}>
        {role === "admin" ? (
          <Typography variant="small" color="blue-gray">
            Admin
          </Typography>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 btn btn-sm bg-gray-300"
          >
            Make Admin
          </button>
        )}
        <Dialog
          size="xs"
          open={isOpen}
          handler={() => setIsOpen(!isOpen)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="py-8"
        >
          <DialogHeader className="w-fit mx-auto">Are You Sure?</DialogHeader>
          <Typography className="w-fit mx-auto">
            You won{"'"}t be able to revert this.
          </Typography>

          <DialogBody>
            <div className="flex justify-center gap-3">
              <Button
                variant="text"
                color="red"
                onClick={() => setIsOpen(false)}
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={handleMakeAdmin}
              >
                <span>Confirm</span>
              </Button>
            </div>
          </DialogBody>
        </Dialog>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  classes: PropTypes.string,
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserRow;
