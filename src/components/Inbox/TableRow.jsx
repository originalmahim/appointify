import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { FiEye, FiTrash } from "react-icons/fi";
import { formatDistance } from "date-fns";
import PropTypes from "prop-types";
import { useState } from "react";

const TableRow = ({ classes, mess }) => {
  const [open, setOpen] = useState(false);
  const { name, email, message, phone, timestamp } = mess || {};

  const postedTime = formatDistance(new Date(timestamp), new Date(), { addSuffix: true })
 
  const handleOpen = () => setOpen(!open);

  return (
    <tr key={name}>
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
      {message?.length > 45 ? (
        <td className={classes}>
          <Typography variant="small" color="blue-gray">
            {message?.slice(0, 45)}...
          </Typography>
        </td>
      ) : (
        <td className={classes}>
          <Typography variant="small" color="blue-gray">
            {message}
          </Typography>
        </td>
      )}
      <td className={classes}>
        <div className="flex gap-2">
          <button className="text-gray-700 btn btn-sm btn-circle">
            <FiEye onClick={handleOpen} />
          </button>
          <button className="text-orange-900 btn btn-sm btn-circle">
            <FiTrash />
          </button>
        </div>
        <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Sent By</DialogHeader>
        <Typography className="pl-4">
          Name: {name}
        </Typography>
        <Typography className="pl-4">
          Email: {email}
        </Typography>
        <Typography className="pl-4">
          Phone: {phone}
        </Typography>
        <DialogHeader>Message</DialogHeader>
        <Typography className="px-4 text-justify">
          {message}
        </Typography>
        <DialogBody>
        <div className="flex justify-between items-center">
            <Typography variant="small">
              {postedTime}
            </Typography>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
          >
            <span>Close</span>
          </Button>
          </div>
        </DialogBody>
      </Dialog>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  classes: PropTypes.string,
  mess: PropTypes.object,
};

export default TableRow;
