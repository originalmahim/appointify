import { Booking } from "./Booking";

// Component to display bookings and additional information
const AllBookings = () => {
  return (
    // Main grid layout with 7 columns and a gap
    <div className="md:grid grid-cols-7 gap-2">
      {/* Left side with bookings grid */}
      <div className="col-span-5 grid lg:grid-cols-2 gap-4">
        {/* Displaying Booking components with different platforms */}
        <Booking platform={"zoom"} />
        <Booking platform={"google"} />
        <Booking platform={"google"} />
        <Booking platform={"zoom"} />
        <Booking platform={"zoom"} />
        <Booking platform={"google"} />
        <Booking platform={"zoom"} />
        <Booking platform={"google"} />
        <Booking platform={"zoom"} />
        <Booking platform={"google"} />
        <Booking platform={"zoom"} />
        <Booking platform={"zoom"} />
      </div>

      {/* Right side with a sticky sidebar */}
      <div className="col-span-2 bg-white p-2">
        <div className="sticky top-0">
          {/* Greeting and introductory paragraph */}
          <div className="p-2 rounded-lg">
            <h1 className="font-bold mb-3">Hello</h1>

            {/* Lorem Ipsum text for illustration */}
            <p className="text-gray-400 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              voluptatibus iure, saepe officiis dicta porro, minima eum ea
              perspiciatis corporis, consequatur dolorem non tempore! Sequi modi
              eligendi itaque at culpa?
            </p>
          </div>

          {/* Another greeting and additional paragraph */}
          <h1 className="font-bold mt-5">Hello</h1>
          <p className="text-sm text-gray-600">
            {/* More Lorem Ipsum text for illustration */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptatibus iure, saepe officiis dicta porro, minima eum ea
            perspiciatis corporis, consequatur dolorem non tempore! Sequi modi
            eligendi itaque at culpa?
          </p>
        </div>
      </div>
    </div>
  );
};

// Exporting the AllBookings component
export default AllBookings;
