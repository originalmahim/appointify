import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Await, Form, useLocation, useNavigate } from "react-router-dom";
import useTransTackData from "../../hooks/useTransTackData";
import { useEffect, useState } from "react";
import OrganizerView from "../DynamicMeetingPage/OrganizerView";
import SingleAvatar from "../../components/Avatar/SingleAvatar";
import { CiCalendarDate } from "react-icons/ci";
import MeetingDetailsCard from "./MeetingDetailsCard";

export default function BookingForm() {
  const axios = useAxiosPublic();
  const navigate = useNavigate();
  const [eventId, setEventId] = useState(null);

  const { data, isLoading } = useTransTackData(
    `/events/singleEvent/${eventId}`,
    eventId
  );

  useEffect(() => {
    const id = localStorage.getItem("eventId");
    if (id) {
      setEventId(id);
    }
  }, []);

  if (isLoading) <p>isLoading....</p>;
  console.log(data?._id);
  //this fun for create google event
  async function createGoogleEvent(email) {
    const event = {
      title: data?.type,
      duration: data?.duration,
      location: data?.location,
      scheduled_time: data?.scheduled_time,
      description: data?.description,
      buffer_time: data?.buffer_time,
      participant: [{ email: data?.user }, { email }],
    };

    try {
      const accessToken = localStorage.getItem("access-token");
      if (accessToken) {
        const eventRes = await axios.post("/schedule_event", event);
        // navigate("/bookingConfirm");
        toast.success(eventRes.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }

  // func for post participant data

  async function saveParticipant(participantData) {
    const participant = {
      name: participantData.firstName + " " + participantData.lastName,
      email: participantData.email,
      message: "fdfdfd",
      image: "fdfdfdfrs",
    };
    console.log(participant);
    try {
      const res = await axios.post(
        `/events/addParticipants/${data?._id}`,
        participant
      );
      console.log(res);
    } catch (err) {
      console.error("There is something error to save error");
    }
  }

  const handleBack = () => {
    localStorage.removeItem("access-token");
  };

  return (
    <div className="flex">
      {/* <OrganizerView/> */}
      <InputForm
        handleBack={handleBack}
        createGoogleEvent={createGoogleEvent}
        saveParticipant={saveParticipant}
      />
    </div>
  );
}

function InputForm({ handleBack, createGoogleEvent, saveParticipant }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // fun for create google meet event
    await createGoogleEvent(data?.email);
    await saveParticipant(data);
  };

  // conditional body background change for this booking confirm page
  const { pathname } = useLocation();

  if (pathname === "/bookingFrom") {
    document.body.style.backgroundColor = "#EAEAEA";
  }

  const data = {
    type: "Meeting",
    duration: 60,
    location: "Virtual",
    scheduled_time: "2024-03-03 15:30",
    description: "A brief description of the event",
    buffer_time: 10,
    user: "john@example.com",
  };

  return (
    <div className="flex flex-col-reverse md:flex-row  mx-auto justify-center w-full md:w-[80%]  min-h-[100vh] overflow-hidden pb-8">
      <Card
        className="p-5 pt-16  mb-2 bg-white md:w-[500px] max-h-[600px] sm:mx-4"
        color="transparent"
        shadow={false}>
        <div className="flex flex-col  gap-5 ">
          <Typography
            variant="h6"
            className="text-[20px] md:text-2xl lg:text-3xl font-normal text-left mb-6"
            color="blue-gray">
            Confirm Booking
          </Typography>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 flex flex-col gap-6">
            {/* First Name */}
            <Typography
              variant="p"
              color="blue-gray"
              className="-mb-6 text-[13px] md:text-[14px] lg:text-[16px] mt-2 border-none outline-none focus-within:outline-none focus-within">
              first Name
            </Typography>
            <Input
              size="lg"
              variant="standard"
              placeholder="Enter your first name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register("firstName", { required: true })} // Register input with useForm
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}

            {/* Last Name */}
            <Typography
              variant="p"
              color="blue-gray"
              className="-mb-8 text-[13px] md:text-[14px] lg:text-[16px] mt-2 border-none outline-none focus-within:outline-none focus-within">
              Last Name
            </Typography>
            <Input
              size="lg"
              variant="standard"
              placeholder="Enter your last name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              {...register("lastName")} // Register input with useForm
            />

            {/* Email */}
            {/* First Name */}
            <Typography
              variant="p"
              color="blue-gray"
              className="-mb-7 text-[13px] md:text-[14px] lg:text-[16px] mt-2 border-none outline-none focus-within:outline-none focus-within:border-none">
              Email
            </Typography>
            <Input
              size="lg"
              variant="standard"
              placeholder="Enter your email address"
              className=" !border-t-blue-gray-100 focus:!border-t-gray-900"
              {...register("email", { required: true })} // Register input with useForm
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex justify-between gap-2 pt-6 mt-6">
            <Button
              onClick={handleBack}
              className="w-1/2 bg-transparent lg:bg-black lg:text-white text-black shadow-none  hover:shadow-none  ">
              Back
            </Button>

            <Button
              type="submit"
              className="w-1/2 text-[13px] md:text-[14px] lg:text-[16px]  bg-transparent shadow-none text-primary"
              fullWidth
              disabled={!isValid}>
              Confirm
            </Button>
          </div>
        </form>
      </Card>
      <div className="bg-[#f6f6f6] h-screen lg:w-80 sm:p-4 max-h-[600px]">
        <MeetingDetailsCard />
      </div>
    </div>
  );
}
