import { FaCheckCircle } from "react-icons/fa";
import premiumIcon from "../../assets/icons/premimum.png";
import googleGmailIcon from "../../assets/icons/gmail.png";


const PremimumFeatures = () => {


    return (
        
      <div className="col-span-2 bg-white p-2 min-h-screen overflow-auto sticky top-0">
      <div className="">
        {/* Beta Features Section */}
        <div className="p-3 rounded-lg bg-gradient-to-tr from-transparent to-[#f8fdff] mb-6">
          <div className="flex justify-center items-center p-3">
            <div className=" w-20 h-20 rounded-full bg-gray-50 p-3">
              <img className="" src={premiumIcon} alt="" />
            </div>
          </div>
          <h1 className="font-bold text-black mb-3 text-center text-[20px] pt-6">
            Explore Beta Features
          </h1>
          {/* from-[#ff5c10] to-[#ff9900e3] */}
          <ul className="list-disc list-inside text-sm ">
            {/* List of beta features for users to explore */}
            <li className="list-none flex gap-1 items-center  text-[15px] md:text-[15px] mt-1">
              {" "}
              <FaCheckCircle className="text-active mt-2" /> Smart Meeting
              Scheduler
            </li>
            <li className="list-none flex gap-1 items-center  text-[15px] md:text-[15px] mt-1">
              {" "}
              <FaCheckCircle className="text-active mt-2" /> Intelligent
              Agenda Planning
            </li>
            <li className="list-none flex gap-1 items-center  text-[15px] md:text-[15px] mt-1">
              {" "}
              <FaCheckCircle className="text-active mt-2" /> Language
              Preference Settings
            </li>
            <button className="bg-primary btn btn-block mt-8 text-white">
              Get beta now
            </button>
          </ul>
        </div>

        {/* Premium Features Section */}
        <div className="p-2 rounded-lg ">
          <h1 className="font-bold mb-3 text-[20px]">
            Unlock Premium Features!
          </h1>

          {/* Highlighting a premium feature with a simple description */}
          <p className="text-gray-500 text-sm ">
            Upgrade to premium to enjoy exclusive features like real-time
            notifications, priority support, and detailed meeting insights.
          </p>
        </div>

        {/* Subscription Section */}
        <div className="p-2 rounded-lg">
          <h1 className="font-bold">Subscribe for More!</h1>
          <p className="text-sm text-gray-500">
            {/* Encouraging users to subscribe for exciting benefits */}
            Subscribe to our newsletter for beta feature access, early
            updates, and special discounts on premium plans.
          </p>
        </div>
        {/* Google and Gmail features */}
        <div className="p-3 rounded-lg mt-6 bg-gradient-to-tr from-transparent to-[#f8fdff] mb-6">
          <div className="flex justify-center items-center p-3">
            <div className=" w-20 h-20 rounded-full bg-gray-50 p-3">
              <img className="" src={googleGmailIcon} alt="" />
            </div>
          </div>

          <h1 className="font-bold text-black mb-3 text-[20px] text-center">
            Google & Gmail Features
          </h1>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
            {/* List of Google features */}
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-active mt-2" />
              <span>Customizable email categorization</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-active mt-2" />
              <span>Smart Reply with context awareness</span>
            </li>
            {/* Add more Google features following the same format */}

            {/* List of Gmail features */}
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-active mt-2" />
              <span>Advanced spam filtering</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-active mt-2" />
              <span>Temporary email addresses</span>
            </li>
          </ul>
          <button className="bg-primary btn btn-block mt-8 text-white">
            Get beta now
          </button>
        </div>
      </div>
    </div>
    )
}


export default PremimumFeatures