import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Await, Form, useNavigate } from "react-router-dom";
import useTransTackData from "../../hooks/useTransTackData";
import { useEffect, useState } from "react";
import OrganizerView from "../DynamicMeetingPage/OrganizerView";
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
      participant:[{email:data?.user},{email}]
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

async function saveParticipant(participantData){
  const participant = {
    name: participantData.firstName + " " + participantData.lastName,
    email:participantData.email,
    message:'fdfdfd',
    image: 'fdfdfdfrs'
  }
  console.log(participant);
try {
  const res =await axios.post(`/events/addParticipants/${data?._id}`,participant);
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

  const onSubmit = async(data) => {
    console.log(data);

    // fun for create google meet event
   await createGoogleEvent(data?.email);
   await saveParticipant(data)
  };

  return (
    <Card
      className="mt-8 mb-2 max-w-max mx-auto"
      color="transparent"
      shadow={false}
    >
      <div className="flex  items-center gap-5 ">
        <Button onClick={handleBack}>Back</Button>
        <Typography variant="h6" color="blue-gray">
          Confirm Bookings
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 flex flex-col gap-6">
          {/* First Name */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            First Name <small>(Require)</small>
          </Typography>
          <Input
            size="lg"
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
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Last Name
          </Typography>
          <Input
            size="lg"
            placeholder="Enter your last name"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            {...register("lastName")} // Register input with useForm
          />

          {/* Email */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email <small>(Require)</small>
          </Typography>
          <Input
            size="lg"
            placeholder="Enter your email address"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            {...register("email", { required: true })} // Register input with useForm
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <Button type="submit" className="mt-6" fullWidth disabled={!isValid}>
          Confirm Booking
        </Button>
        <Typography
          color="gray"
          variant="small"
          className="mt-4 text-center font-normal"
        >
          This form is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="font-medium text-gray-900">
            Privacy Policy
          </a>
          and{" "}
          <a href="#" className="font-medium text-gray-900">
            Terms of Service
          </a>{" "}
          apply
        </Typography>
      </form>
    </Card>
  );
}