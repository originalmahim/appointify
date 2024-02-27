import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div className="flex items-center ml-14">
      <Link to="/contact">
        <button className="strt p-2 rounded-3xl text-sm hover:scale-105">
          or just click here to notify us
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
