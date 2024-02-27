import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const initialAction = () => {
    const message = createChatBotMessage(
      "Hello, what's your enquiry about Appointify?"
    );

    updateState(message);
  };
  const AboutAppointify = () => {
    const message = createChatBotMessage(
      "Appointify is a Schedule Processing Application designed to effortlessly organize appointments, meetings, and tasks in one intuitive platform."
    );

    updateState(message);
  };
  const HandleUnknown = () => {
    const message = createChatBotMessage(
      "Sorry, I don't understand.Could you be more specific? Or If you like you can send us a mail at appointify99@gmail.com"
    );

    updateState(message);
  };

  const handleContact = () => {
    const message = createChatBotMessage(
      "Thank you for your interest in Appointify. You can send us an email at appointify99@gmail.com",
      {
        withAvatar: true,
        delay: 800,
        widget: "contact",
      }
    );

    updateState(message);
  };

  const handleTeam = () => {
    const message = createChatBotMessage(
      "Discover the faces behind our platform and learn more about the dedicated individuals who make everything possible.",
      {
        withAvatar: true,
        delay: 800,
        widget: "team",
      }
    );

    updateState(message);
  };
  const handlePricing = () => {
    const message = createChatBotMessage(
      "We offer three flexible pricing plans to cater to your needs starting from $0",
      {
        withAvatar: true,
        delay: 800,
        widget: "pricing",
      }
    );

    updateState(message);
  };

  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            AboutAppointify,
            HandleUnknown,
            handleTeam,
            handleContact,
            handlePricing,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
