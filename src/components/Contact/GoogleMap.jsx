const GoogleMap = () => {
  return (
    <div data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.702529143768!2d90.343537235585!3d23.79456235681529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1706101898660!5m2!1sen!2sbd"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
