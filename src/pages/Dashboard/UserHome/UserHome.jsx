import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPlusCircle } from "react-icons/fa";

const UserHome = () => {
  const [availableDays, setavailableDays] = useState([]);
  const handleDayToggle = (day) => {
    setavailableDays((prevavailableDays) => {
      if (prevavailableDays.includes(day)) {
        return prevavailableDays.filter((d) => d !== day);
      } else {
        return [...prevavailableDays, day];
      }
    });
  };
  const handleSchedule = (e) => {
    const form = e.target;
    const Title = form.title.value;
    const Duration_hour = form.hour.value;
    const Duration_min = form.min.value;
    const Availability_start = form.start.value;
    const Availability_end = form.end.value;
    const Day = availableDays;
    console.log(
      Duration_hour,
      Duration_min,
      Day,
      Availability_start,
      Availability_end,
      Title
    );
    setavailableDays([]);
    form.reset();
  };
  return (
    <>
      <Helmet>
        <title>Dashboard | User Home</title>
      </Helmet>
      <section className="flex items-center justify-between">
        <h2 className="text-2xl font-bold sm:text-3xl">All Booking pages</h2>
        <h2
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="text-lg py-2 px-3 rounded-full bg-teal-100 hover:bg-teal-200 font-bold sm:text-xl inline-flex items-center cursor-pointer"
        >
          Create booking page
          <FaPlusCircle className="ml-1" />
        </h2>
        {/* modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box h-screen pt-10 bg-cyan-50">
            <h3 className="font-bold mb-3 text-center text-lg">
              Set your availability
            </h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form onSubmit={handleSchedule}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How long are your meetings for?
                </label>
                <div className="flex items-center space-x-2">
                  <select
                    required
                    name="hour"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  >
                    {/* Add hour options based on your requirements */}
                    <option value="">Hour</option>
                    <option value="01">01 hour</option>
                    <option value="02">02 hours</option>
                    <option value="03">03 hours</option>
                    <option value="04">04 hours</option>
                    <option value="05">05 hours</option>
                    <option value="06">06 hours</option>
                    <option value="07">07 hours</option>
                    <option value="08">08 hours</option>
                    {/* Add more hours as needed */}
                  </select>
                  <span className="text-gray-500">:</span>
                  <select
                    name="min"
                    required
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  >
                    {/* Add minute options based on your requirements */}
                    <option value="">Minute</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    {/* Add more minutes as needed */}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Available Days:
                </label>

                <div className="grid grid-cols-3">
                  {[
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ].map((day) => (
                    <div key={day} className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-500"
                        checked={availableDays.includes(day)}
                        onChange={() => handleDayToggle(day)}
                      />
                      <span className="ml-2 text-gray-700">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  When are you free to take bookings?
                </label>
                <div className=" flex sm:items-center flex-col sm:flex-row mt-2 gap-4">
                  <label className="block text-sm font-medium text-gray-700">
                    From
                  </label>
                  <input
                    required
                    className=" h-8 rounded-md"
                    type="time"
                    name="start"
                    id=""
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    To
                  </label>
                  <input
                    required
                    className=" h-8 rounded-md"
                    type="time"
                    name="end"
                    id=""
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Booking page title
                </label>
                <input
                  className="h-10 rounded-md"
                  required
                  name="title"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="btn mt-10 bg-[#7155d3] text-white btn-sm hover:bg-[#6445d4] hover:scale-105 transition-all duration-200"
              >
                Confirm
              </button>
            </form>
          </div>
        </dialog>
      </section>
    </>
  );
};

export default UserHome;
