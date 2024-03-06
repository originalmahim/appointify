import axios from "axios";

const PayButton = ({ children }) => {
  const pay = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/bkash/payment/create",
        { amount: 50, orderId: 1 },
        { withCredentials: true }
      );
    //   console.log(data);
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
