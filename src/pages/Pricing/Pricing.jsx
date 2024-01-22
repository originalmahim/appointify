import { Helmet } from "react-helmet-async";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Appointify | Pricing</title>
      </Helmet>
      <div className="p-5 max-w-3xl mx-auto pt-24">
        <h2 className=" font-play text-center text-2xl md:text-4xl font-bold mb-6">
          Pick the perfect plan
        </h2>
        <p className="lg:text-lg text-center mb-10">
          Get started with Setmore Free or choose from Pro and Team to access
          advanced features.
        </p>
      </div>
    </>
  );
};

export default Pricing;
