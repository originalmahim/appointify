import { Button } from "@material-tailwind/react";
import {
  AiFillDelete,
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
} from "react-icons/ai";

const AvailabilityHeader = ({ handleSaveData }) => {
  return (
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center gap-2">
        <AiOutlineArrowLeft />
        <p>Working Hour</p>
      </div>

      <div className="flex items-center gap-4">
        <Button onClick={handleSaveData} size="md" color="orange">
          Save
        </Button>
      </div>
    </div>
  );
};
export default AvailabilityHeader;
