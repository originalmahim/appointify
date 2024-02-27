import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import ContactButton from "./ContactButton";
import Options from "./Options/Options";
import PricingPlan from "./PricingPlan";
import Team from "./Team";

const botName = "Ping";
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Welcome to Appointify. Hi! I'm ${botName}.`),
    createChatBotMessage("I'm here to help you.", {
      withAvatar: true,
      delay: 1000,
      widget: "option",
    }),
  ],
  customComponents: {
    // Replaces the default bot avatar
    botAvatar: (props) => <Avatar {...props} />,
  },
  widgets: [
    {
      widgetName: "team",
      widgetFunc: (props) => <Team {...props} />,
    },
    {
      widgetName: "option",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "pricing",
      widgetFunc: (props) => <PricingPlan {...props} />,
    },
    {
      widgetName: "contact",
      widgetFunc: (props) => <ContactButton {...props} />,
    },
  ],
};

export default config;
