import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function BookingForm() {
  const axios = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    // Process the form data here, e.g., send it to a server
    console.log(data);
    createEvent();
  };

  async function createEvent() {
const event = {
  title: "Event Title",
  description: "Event description",
  // Other event details as required by your backend
};
    try {
      const accessToken = localStorage.getItem("access-token");
      if (accessToken) {
        const eventRes = await axios.post("/schedule_event", event);
        // navigate("/bookingConfirm");
        toast.success(eventRes.data.message);
        console.log(eventRes);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mx-auto flex justify-center items-center shadow-lg">
      <Card color="transparent" shadow={false}>
        <div className="flex items-center gap-10 mt-40">
          <Button>Back</Button>
          <Typography variant="h6" color="blue-gray">
            Confirm Bookings
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
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
    </div>
  );
}
