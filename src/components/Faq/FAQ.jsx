const faqData = [
  {
    question: "What is the purpose of this website?",
    answer:
      "This website is designed to help you effortlessly organize appointments, meetings, and tasks in one intuitive platform. It aims to empower users to elevate productivity and reclaim control over their daily routine.",
  },
  {
    question: "When do I make a payment?",
    answer:
      "Your billing cycle for a 'Pro' or 'Team' account begins the day you sign up. Your subscription will automatically renew based on the billing period (monthly/annual) you choose.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time. You can try 'Pro' or 'Team' risk-free for 30 days and if you're not satisfied, contact us to request a refund.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply sign up for an account, and you'll have access to the full suite of features. Once logged in, you can start organizing your appointments, scheduling meetings, and managing tasks.",
  },
  {
    question: "What features does the platform offer?",
    answer:
      "Our platform provides a range of features, including a user-friendly calendar for scheduling appointments, a meeting scheduler for coordinating meetings with others, and a task management system for organizing and prioritizing tasks. You can also set reminders and receive notifications to stay on top of your schedule.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take the security of your data seriously. Our website employs robust encryption protocols to ensure the confidentiality and integrity of your information. We also follow industry best practices for data storage and protection.",
  },
  {
    question: "Can I access the platform from my mobile device?",
    answer:
      "Absolutely! Our website is designed to be responsive, allowing you to access and use the platform seamlessly on your mobile device. Simply open your browser and log in to stay organized on the go.",
  },
  {
    question: "How do I invite others to meetings or share my schedule?",
    answer:
      "You can easily invite others to meetings or share your schedule by using the built-in collaboration features. Look for the 'Invite' or 'Share' option within the relevant section of the platform, and follow the prompts to invite team members, colleagues, or friends.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a free trial period for new users. During this time, you can explore the platform's features and determine if it meets your organizational needs. After the trial, you can choose a subscription plan that best suits your requirements.",
  },
  {
    question: "How do I contact support if I have questions or issues?",
    answer:
      "If you have any questions or encounter issues, our support team is here to help. You can reach out to us through the 'Contact' or 'Support' page on the website, where you'll find options for email support, live chat, or a knowledge base with helpful resources.",
  },
];

const FAQ = () => {
  return (
    <section className="max-w-[1400px] mx-auto mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <h1 className="text-center text-special text-3xl md:text-4xl xl:text-5xl font-play font-bold mb-8 md:mb-12 lg:mb-14 xl:mb-16">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-wrap">
        {faqData?.map((item, index) => (
          <div key={index} className="w-full lg:w-1/2 px-6 py-3">
            <details className="mb-5">
              <summary className="text-lg font-semibold bg-cardBG dark:text-gray-700 rounded-lg py-3 px-6">
                {item?.question}
              </summary>
              <p className="w-[90%] mx-auto mt-5 font-medium">{item?.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
