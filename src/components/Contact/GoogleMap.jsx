import Container from "../Container/Container";

const GoogleMap = () => {
  return (
    <section className="mt-24 md:mt-32 lg:mt-36 xl:mt-40">
      <Container>
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="px-2 2xl:px-3"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7146096329684!2d90.40460281029614!3d23.793174978552134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c752af58019b%3A0xdf42ed7f37ecf1ed!2sbanani!5e0!3m2!1sen!2sbd!4v1706209119791!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            title="Google Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMap;
