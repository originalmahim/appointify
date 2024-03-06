import { useLocation } from "react-router-dom";

const Error = () => {
  const goBack = () => {
    window.location.href = "/pricing";
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const message = queryParams.get("message");

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl text-red-400">Payment {message}</h2>
          <button className="btn btn-primary" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
