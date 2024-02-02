import { Link } from "react-router-dom";

const PricingPlan = () => {
  return (
    <div className="bg-[#2898ec] text-white p-2 text-sm rounded ml-14">
      <div>
        <h3>Free Plan:</h3>
        <ul>
          <li>
            <strong>Monthly:</strong> $0.00
          </li>
          <li>
            <strong>Annual:</strong> $0.00 (Yes, it's free!)
          </li>
        </ul>
      </div>

      <div>
        <h3>Standard Plan:</h3>
        <ul>
          <li>
            <strong>Monthly:</strong> $50
          </li>
          <li>
            <strong>Annual:</strong> $500
          </li>
        </ul>
      </div>

      <div>
        <h3>Pro Plan:</h3>
        <ul>
          <li>
            <strong>Monthly:</strong> $80
          </li>
          <li>
            <strong>Annual:</strong> $1000
          </li>
        </ul>
      </div>
      <Link
        to="/pricing"
        className="flex cursor-pointer justify-end font-semibold underline"
      >
        See all offers
      </Link>
    </div>
  );
};

export default PricingPlan;
