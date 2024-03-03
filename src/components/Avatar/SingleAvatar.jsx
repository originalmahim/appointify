const SingleAvatar = ({ img }) => {
  return (
    <div className="avatar">
      <div className="w-5 md:w-6 lg:w-7 rounded-full outline-[2px] outline  outline-active ">
        <img src={img} />
      </div>
    </div>
  );
};

export default SingleAvatar;
