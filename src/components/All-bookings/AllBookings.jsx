import { Booking } from "./Booking";

const AllBookings = () => {
  return (
    <div className="md:grid grid-cols-7 gap-2">
      <div className="col-span-5 grid lg:grid-cols-2 gap-2">
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
      <div className="col-span-2 bg-white p-2">
        <div className="sticky top-0">
          <div className=" p-2 rounded-lg">
            <h1 className="font-bold mb-3">Hello</h1>

            <p className="text-gray-400 text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              voluptatibus iure, saepe officiis dicta porro, minima eum ea
              perspiciatis corporis, consequatur dolorem non tempore! Sequi modi
              eligendi itaque at culpa?
            </p>
          </div>

          <h1 className="font-bold mt-5">Hello</h1>

          <p className="text-sm text-gray-600">
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

export default AllBookings;
