import { useState } from "react";
import { Helmet } from "react-helmet-async";
import planData from "../../../public/pricing.json";
import Container from "../../components/Container/Container";
import FAQ from "../../components/Faq/FAQ";
import PricingCard from "../../components/Pricing/PricingCard";

const Pricing = () => {
  const [monthlyBill, setMonthlyBill] = useState(true);
  const handleChange = () => {
    console.log("toggled");
    setMonthlyBill(!monthlyBill);
  };
  return (
    <>
      <Helmet>
        <title>Appointify | Pricing</title>
      </Helmet>
      <div className="p-5 max-w-3xl mx-auto pt-32">
        <h2 className=" font-play text-center text-2xl md:text-4xl font-bold mb-6">
          Pick the perfect plan
        </h2>
        <p className="lg:text-lg text-center mb-14">
          Get started with Appointify Free or choose from Pro and Standard to
          access advanced features.
        </p>
        <div className="flex items-center justify-center gap-3 md:gap-5 lg:gap-10">
          <p className=" font-semibold text-lg">Monthly Billing</p>
          <input
            onChange={handleChange}
            type="checkbox"
            className="toggle bg-head"
          />
          <p className=" font-medium text-lg">Annual Billing</p>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {planData.map((plan, index) => (
            <PricingCard
              key={plan.id}
              monthlyBill={monthlyBill}
              index={index}
              plan={plan}
            />
          ))}
        </div>
      </Container>
      <FAQ />
    </>
  );
};

export default Pricing;
