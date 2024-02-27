import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    const lowerCase = message.toLowerCase();
    if (lowerCase.includes("pricing")) {
      actions.handlePricing();
    } else if (
      lowerCase.includes("about us") ||
      lowerCase.includes("about you") ||
      lowerCase.includes("team") ||
      lowerCase.includes("member") ||
      lowerCase.includes("Can you tell me more about appointify")
    ) {
      actions.HandleTeam();
    } else if (lowerCase.includes("hello") || lowerCase.includes("hi")) {
      actions.initialAction();
    } else if (
      lowerCase.includes("what is appointify") ||
      lowerCase.includes("about appointify") ||
      lowerCase.includes("what is this website")
    ) {
      actions.AboutAppointify();
    } else if (
      lowerCase.includes("contact") ||
      lowerCase.includes("mail") ||
      lowerCase.includes("how can I contact appointify for further assistance")
    ) {
      actions.HandleContact();
    } else {
      actions.HandleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
