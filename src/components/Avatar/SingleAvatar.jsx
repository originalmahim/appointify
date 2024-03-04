const SingleAvatar = ({ img,usedIn }) => {

  const isTrue = usedIn === "bookingForm"

  return (
    <div className="avatar">
      <div className={`w-5 md:w-6 lg:w-7 rounded-full outline-[2px] ${isTrue?"outline  outline-active":"outline outline-gray-300"} `}>
        <img src={img} />
      </div>
    </div>
  );
};

export default SingleAvatar;
