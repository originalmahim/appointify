const Options = (props) => {
  const options = [
    {
      text: "Learn about Pricing",
      handler: props.actionProvider.handlePricing,
      id: 1,
    },
    {
      text: "Contact us",
      handler: () => {
        props.actionProvider.handleContact();
      },
      id: 2,
    },
    { text: "Meet our team", handler: props.actionProvider.handleTeam, id: 3 },
    { text: "About us", handler: props.actionProvider.AboutAppointify, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className=" border border-[#2898ec] bg-cardBG hover:scale-105 rounded-lg text-xs px-2 py-[5px] my-2"
    >
      {option.text}
    </button>
  ));

  return <div className="flex flex-wrap ml-12 gap-2">{buttonsMarkup}</div>;
};

export default Options;
