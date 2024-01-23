import { Helmet } from "react-helmet-async";
import ContactBanner from "../../components/Contact/ContactBanner";
import ContactForm from "../../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Appointify - Contact Us</title>
      </Helmet>
      <section>
        <ContactBanner />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
