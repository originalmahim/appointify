/* eslint-disable no-unused-vars */
import axios from "axios";

const PayButton = ({ bill, children }) => {
  const pay = async () => {
    try {
        const orderId = Math.floor(Math.random() * 1000000) + Date.now(); // Generate random order ID
        const { data } = await axios.post(
          "http://localhost:5000/bkash/payment/create",
          { amount: bill, orderId },
          { withCredentials: true }
        );
      window.location.href = data.bkashURL;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <button
        className="w-full h-12 text-white font-semibold bg-gradient-blue rounded-lg hover:bg-gradient-to-r hover:from-special hover:to-head active:scale-95"
        onClick={pay}
      >
        {children}
      </button>
    </div>
  );
};

export default PayButton;
