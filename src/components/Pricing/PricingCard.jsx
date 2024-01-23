import { FaCircleCheck } from "react-icons/fa6";

const PricingCard = ({ plan, index, monthlyBill }) => {
  return (
    <div
      className={`bg-cardBG mt-5 md:hover:scale-110 hover:z-30 hover:shadow-lg p-5 rounded-lg relative ${
        index == 1 && "md:scale-110"
      }`}
    >
      <div className=" flex justify-end">
        {index === 1 && (
          <div className=" absolute rounded-lg w-14 flex justify-center items-center bg-head">
            <span className=" text-cardBG text-sm">Popular</span>
          </div>
        )}
      </div>
      <h2 className="text-3xl font-semibold font-play mb-4">{plan.plan}</h2>
      {monthlyBill ? (
        <p className=" text-sm">
          <span className=" text-xl font-semibold ">$ {plan.monthlyFee}</span>
          <span className=" text-2xl">/</span>
          month
        </p>
      ) : (
        <p className=" text-sm">
          <span className=" text-xl font-semibold ">$ {plan.annualFee}</span>
          <span className=" text-2xl">/</span>
          year
        </p>
      )}
      <button className="w-full h-[44px] text-white font-semibold bg-gradient-blue rounded-lg hover:bg-gradient-to-r hover:from-special hover:to-head transition transform active:scale-95">
        Start {plan.plan}
      </button>
      <div className="mt-5 flex flex-col gap-2">
        {plan?.facilities?.map((service) => (
          <p className=" inline-flex" key={service}>
            <div className="mt-1">
              <FaCircleCheck color="blue" size={20} className="" />
            </div>
            <span className="pl-2">{service}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
