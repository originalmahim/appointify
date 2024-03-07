const Success = () => {
  const goBack = () => {
    window.location.href = "/pricing";
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl text-green-400">Payment Successful</h2>
          <button className="btn btn-primary" onClick={goBack}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;
