// MeetLink.jsx
import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/link.png";

const MeetLink = ({ url }) => {

  const link = url?url:"https://meet.google.com/cqm-fvfh-nzw"
  return (
    <div className="flex items-center gap-2 text-[15px]">
      <figure className="bg-[#e9f4ff] w-9 p-2 rounded-full">
        <img className="w-4 md:w-6" src={linkIcon} alt="" />
      </figure>
      <Link className="text-light-gray text-[14px] md:text-[16px]" to={link} >
        {link.slice(0,12) + ".."}
      </Link>
    </div>
  );
};

export default MeetLink;
