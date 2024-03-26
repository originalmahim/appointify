import axios from "axios";
import toast from "react-hot-toast";
const baseUrl = "http://localhost:5000"
export async function updateAvailability(updatedData,userEmail) {
  try {
    console.log(updatedData,userEmail);
    const res = await axios.put(`${baseUrl}/users/${userEmail}/availability/`, {
      availability: updatedData,
    });
    return res
  } catch (err) {
    console.error(err);
    toast.error("Error Updating slot.");
  }
}

async function removeAllSlot(dayName,userEmail) {
    try {
      const res = await axios.delete(
        `/users/removeDay/${userEmail}/day/${dayName}`
      );
return res
  } catch (err) {
    console.error(err);
    toast.error("Error removing slots.");
  }
}


  const handlePlus = () => {
    console.log("item plus");
    const newSlot = {
      day: dayName,
      slots: [{ start_time: "09:00", end_time: "05:00" }],
    };
    postNewSlot(newSlot);
  };
  const handleRemoveSlot = async (id) => {
    try {
      const res = await axios.delete(
        `/users/removeSlot/${userEmail}/slots/${id}`
      );
      if (res.status) {
        toast.success(res.data.message);
      }

    } catch (err) {
      console.error(err);
    }
  };

