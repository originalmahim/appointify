import PropTypes from "prop-types";

const ContactCard = ({ title, subTitle }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:gap-1 lg:gap-2">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-lg font-semibold text-[#757575]">{subTitle}</p>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default ContactCard;
