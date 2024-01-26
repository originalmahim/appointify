import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="flex items-center ml-14">
      <Link to="/about-us">
        <button className="strt p-2 rounded-3xl">Meet Our Team</button>
      </Link>
    </div>
  );
};

export default Team;
