import { useEffect, useState } from "react";
import { Booking } from "./Booking";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { BiSolidSelectMultiple } from "react-icons/bi";

// Component to display bookings and additional information
const AllBookings = () => {
  const axios = useAxiosPublic();
  const [allEvents, setAllEvents] = useState([]);

  // Fetching events data on component mount
  useEffect(() => {
    axios.get("/events/forhadairdrop@gmail.com").then((res) => {
      if (res?.data.length > 0) {
        setAllEvents(res?.data);
      }
    });
  }, [axios]);

  return (
    // Main grid layout with 7 columns and a gap
    <div className="md:grid grid-cols-7 gap-2">
      {/* Left side with bookings grid */}
      <div className="col-span-5 grid lg:grid-cols-2 gap-4">
        {allEvents?.map((event) => (
          <Booking key={event?._id} meeting={event} />
        ))}
      </div>

      {/* Right side with a sticky sidebar */}
      <div className="col-span-2 bg-white p-2">
        <div className="sticky top-0">
          {/* Premium Features Section */}
          <div className="p-2 rounded-lg">
            <h1 className="font-bold mb-3">Unlock Premium Features!</h1>

            {/* Highlighting a premium feature with a simple description */}
            <p className="text-gray-500 text-sm ">
              Upgrade to premium to enjoy exclusive features like real-time
              notifications, priority support, and detailed meeting insights.
            </p>
          </div>

          {/* Beta Features Section */}
          <div className="p-3 rounded-lg my-3 mx-2 bg-gradient-to-r shadow-sm outline outline-[1px] outline-gray-500 ">
            {/* from-[#ff5c10] to-[#ff9900e3] */}
            <h1 className="font-bold text-black mb-1">Explore Beta Features</h1>
            <ul className="list-disc list-inside text-sm text-gray-600 ">
              {/* List of beta features for users to explore */}
              <li className="list-none flex gap-1 items-center mt-1">
                {" "}
                <BiSolidSelectMultiple className="text-black" /> Smart Meeting
                Scheduler
              </li>
              <li className="list-none flex gap-1 items-center mt-1">
                {" "}
                <BiSolidSelectMultiple className="text-black" /> Intelligent
                Agenda Planning
              </li>
              <li className="list-none flex gap-1 items-center mt-1">
                {" "}
                <BiSolidSelectMultiple className="text-black" /> Language
                Preference Settings
              </li>
            </ul>
          </div>

          {/* Subscription Section */}
          <div className="p-2 rounded-lg">
            <h1 className="font-bold">Subscribe for More!</h1>
            <p className="text-sm text-gray-500">
              {/* Encouraging users to subscribe for exciting benefits */}
              Subscribe to our newsletter for beta feature access, early
              updates, and special discounts on premium plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the enhanced AllBookings component
export default AllBookings;
