import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (
      message.includes("about us") ||
      message.includes("About us") ||
      message.includes("about you") ||
      message.includes("team") ||
      message.includes("member") ||
      message.includes("Can you tell me more about Appointify")
    ) {
      actions.HandleTeam();
    } else if (
      message.includes("hello") ||
      message.includes("Hello") ||
      message.includes("Hi") ||
      message.includes("hi")
    ) {
      actions.initialAction();
    } else if (
      message.includes("what is Appointify") ||
      message.includes("what is appointify") ||
      message.includes("What is Appointify") ||
      message.includes("What is appointify") ||
      message.includes("about Appointify") ||
      message.includes("about appointify") ||
      message.includes("what is this website")
    ) {
      actions.AboutAppointify();
    } else if (
      message.includes("contact") ||
      message.includes("Contact") ||
      message.includes("mail") ||
      message.includes("Mail") ||
      message.includes("How can I contact Appointify for further assistance")
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
