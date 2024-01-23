import { Helmet } from "react-helmet-async";
import ContactBanner from "../../components/Contact/ContactBanner";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Appointify - Contact Us</title>
      </Helmet>
      <ContactBanner />
    </>
  );
};

export default Contact;
