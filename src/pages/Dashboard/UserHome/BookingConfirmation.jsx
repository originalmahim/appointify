import { Link } from "react-router-dom";

const BookingConfirmation = ({ link, event }) => {
  return (
    <div>
      <h1>You have successfully created an event</h1>
      <Link to={link} className="text-primary">
        {`appointify/booking/${event?.type}.com`}
      </Link>
    </div>
  );
};

export default BookingConfirmation;
