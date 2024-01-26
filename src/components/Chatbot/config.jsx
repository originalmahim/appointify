import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import Team from "./Team";

const botName = "Ping";
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Welcome to Appointify. Hi! I'm ${botName}`),
    createChatBotMessage("I'm here to help you, tell me what you need", {
      withAvatar: true,
      delay: 1000,
      widget: "nest",
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
  ],
};

export default config;
