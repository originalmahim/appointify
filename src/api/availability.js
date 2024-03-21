import axios from "axios";
import toast from "react-hot-toast";

async function postNewSlot(newSlot) {
  try {
    const res = await axios.post(`/users/availability/${userEmail}`, newSlot);
return res
  } catch (err) {
    console.error(err);
    toast.error("Error creating slot.");
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
