import CountUp from "react-countup";

const State = () => {
  const statsData = [
    {
      value: "154",
      suffix: "k",
      label: "Global Users",
    },
    {
      value: "9",
      suffix: "+",
      label: "Countries active users",
    },
    {
      value: "3",
      suffix: "k",
      label: "Companies use",
    },
    {
      value: "80",
      suffix: "+",
      label: "Global Partners",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-20 text-head bg-[#E4EDFF] px-20 py-16">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-5xl lg:text-6xl font-bold mb-6">
            <CountUp end={stat.value} duration={3} enableScrollSpy={true} />
            <span className="text-dark">{stat.suffix}</span>
          </div>
          <h3 className="text-xl font-medium">{stat.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default State;
