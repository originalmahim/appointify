import { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { Helmet } from "react-helmet-async";
import ActionProvider from "../../components/Chatbot/ActionProvider";
import MessageParser from "../../components/Chatbot/MessageParser";
import config from "../../components/Chatbot/config";
import Banner from "../../components/Home/Banner/Banner";
import NewsLetter from "../../components/Home/Contacts/NewsLetter";
import UserReviews from "../../components/Home/CustomerReview/UserReviews";
import FeatureOverview from "../../components/Home/FeatureOverview/FeatureOverview";
import LatestAchievementsCards from "../../components/Home/LatestAchievement/LatestAchievementCards";
import TrustedCompanies from "../../components/Home/TrustedCompaniesSection/TrustedCompanies";
import useScrollToTop from "../../hooks/useScrollToTop";
import { FaArrowUp } from "react-icons/fa";

const HomePage = () => {
  const [showChatbot, toggleChatbot] = useState(false);
  const { isScrollVisible, scrollToTop } = useScrollToTop(200);
  return (
    <>
      <Helmet>
        <title>Appointify | Home</title>
      </Helmet>
      <section>
        <Banner />
        <FeatureOverview />
        <UserReviews />
        <LatestAchievementsCards></LatestAchievementsCards>
        <TrustedCompanies></TrustedCompanies>
        <NewsLetter />
      </section>
      <div className="app-chatbot-container">
        {showChatbot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </div>
      {/* scroll to top */}
      {/* Render the scroll-to-top button when showScrollButton is true */}
      {isScrollVisible && (
        <button
          className="fixed z-50 bottom-20 right-6 md:right-12 border bg-special text-white dark:bg-white text-3xl md:text-4xl rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}

      {/* chatbot */}
      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        {/* <img
          src={}
          className="app-chatbot-button-icon"
        /> */}
        <svg
          className=" app-chatbot-button-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z" />
        </svg>
      </button>
    </>
  );
};

export default HomePage;
