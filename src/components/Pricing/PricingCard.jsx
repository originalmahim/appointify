import { FaCircleCheck } from "react-icons/fa6";
import PropTypes from "prop-types";
import PayButton from "../../bkash/PayButton";

const PricingCard = ({ plan, index, monthlyBill }) => {
  return (
    <div
      className={`bg-cardBG mt-5 md:hover:scale-110 hover:z-30 hover:shadow-lg transition duration-300 p-5 rounded-lg relative ${
        index == 1 && "md:scale-105"
      }`}
    >
      <div className="flex justify-end">
        {index === 1 && (
          <div className="absolute rounded-lg w-14 flex justify-center items-center bg-head">
            <span className="text-cardBG text-sm">Popular</span>
          </div>
        )}
      </div>
      <h2 className="text-3xl font-semibold font-play mb-4">{plan.plan}</h2>
      {monthlyBill ? (
        <p className="text-sm">
          <span className="text-xl font-semibold">$ {plan.monthlyFee}</span>
          <span className="text-2xl">/</span>
          month
        </p>
      ) : (
        <p className="text-sm">
          <span className="text-xl font-semibold">$ {plan.annualFee}</span>
          <span className="text-2xl">/</span>
          year
        </p>
      )}
      <div>
        <PayButton>Get Started</PayButton>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        {plan?.facilities?.map((service) => (
          <div className="inline-flex" key={service}>
            <div className="mt-1">
              <FaCircleCheck size={20} className="text-head" />
            </div>
            <span className="pl-2">{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.object,
  index: PropTypes.number,
  monthlyBill: PropTypes.bool,
};

export default PricingCard;
