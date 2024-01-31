import { useState } from "react";
import { Helmet } from "react-helmet-async";
import planData from "../../../public/pricing.json";
import Container from "../../components/Container/Container";
import FAQ from "../../components/Faq/FAQ";
import PricingCard from "../../components/Pricing/PricingCard";

const PricingPage = () => {
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
      <div className="p-2 max-w-3xl mx-auto pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-6">
          Pick the perfect plan
        </h1>
        <p className="text-center 2xl:text-lg text-sub-head font-medium mb-8 md:mb-12 lg:mb-14 xl:mb-16">
          Get started with Appointify Free or choose from Pro and Standard to
          access advanced features.
        </p>
        <div className="text-center flex items-center justify-center gap-3 md:gap-5 lg:gap-10">
          <p className={` ${monthlyBill && "font-semibold"} text-lg`}>
            Monthly Billing
          </p>
          <input
            onChange={handleChange}
            type="checkbox"
            className="toggle bg-head"
          />
          <p className={` ${!monthlyBill && "font-semibold"} text-lg`}>
            Annual Billing
          </p>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 px-2 2xl:px-3">
          {planData?.map((plan, index) => (
            <PricingCard
              key={plan.id}
              monthlyBill={monthlyBill}
              index={index}
              plan={plan}
            />
          ))}
        </div>
        <FAQ />
      </Container>
    </>
  );
};

export default PricingPage;
