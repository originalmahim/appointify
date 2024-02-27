import CountUp from "react-countup";
import Container from "../Container/Container";

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
    <section className="text-head bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-20 py-20">
          {statsData?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-6">
                <CountUp end={stat.value} duration={3} enableScrollSpy={true} />
                <span className="text-special">{stat.suffix}</span>
              </div>
              <h3 className="text-xl font-medium">{stat.label}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default State;
