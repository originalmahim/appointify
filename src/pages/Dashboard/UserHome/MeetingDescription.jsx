import { Textarea } from "@material-tailwind/react";
import React, { useState } from "react";

const MeetingDescription = ({ setDescriptionChange }) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
    setDescriptionChange(newDescription);
  };

  return (
    <div className="pt-1">
      <div className="relative w-full min-w-[200px]">
        <Textarea
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          className="peer h-full min-h-[70px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Description "
        ></Textarea>

      </div>
    </div>
  );
};

export default MeetingDescription;
