import { useContext, useEffect, useState } from "react";
import { Booking } from "./Booking";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import PremimumFeatures from "./PremiumFeatures";

// Component to display bookings and additional information

const AllBookings = ({ setAllSearchedEvents, searchQuery, searchedEvents }) => {
  const axios = useAxiosPublic();
  const [allEvents, setAllEvents] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchEvents = () => {
    axios.get(`/events/${user && user?.email}`).then((res) => {
      if (res?.data.length > 0) {
        setAllEvents(res?.data);
        setAllSearchedEvents(res?.data);
      }
    });
  };

  useEffect(() => {
    fetchEvents();
  }, [axios, user, searchQuery === ""]);

  useEffect(() => {
    if (searchQuery === "" || searchedEvents.length <= 0) {
      setAllEvents(allEvents);
    } else {
      setAllEvents(searchedEvents);
    }
  }, [searchedEvents, searchQuery]);

  return (
    // Main grid layout with 7 columns and a gap
    <div className="md:grid grid-cols-6 gap-5  sticky top-0">
      {/* Left side with bookings grid */}
      <div className="col-span-4  gap-5">
        {searchQuery === "" && allEvents.length > 0 ? (
          allEvents.map((event) => <Booking key={event?._id} meeting={event} />)
        ) : searchedEvents?.length > 0 ? (
          searchedEvents.map((event) => <Booking key={event?._id} meeting={event} />)
        ) : (
          <div>
          <img
            className="w-full h-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:679/1*C5oq4FeTlcpNXrXfnPpxTQ.gif"
            alt=""
          />
        </div>
        )}
      </div>

      {/* Premium features sidebar */}
      <PremimumFeatures />
    </div>
  );
};

// Exporting the enhanced AllBookings component
export default AllBookings;