import PropTypes from "prop-types";

const ContactCard = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center md:gap-1 lg:gap-2">
      <p className="text-2xl font-semibold font-play">{title}</p>
      <p className="text-lg font-medium text-[#757575]">{subTitle}</p>
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ContactCard;
