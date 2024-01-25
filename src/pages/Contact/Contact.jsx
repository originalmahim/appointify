import { Helmet } from "react-helmet-async";
import ContactBanner from "../../components/Contact/ContactBanner";
import ContactForm from "../../components/Contact/ContactForm";
import GoogleMap from "../../components/Contact/GoogleMap";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Appointify - Contact Us</title>
      </Helmet>
      <section>
        <ContactBanner />
        <ContactForm />
        <GoogleMap />
      </section>
    </>
  );
};

export default Contact;
