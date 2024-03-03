import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export const SendJoiningMailToParticipants = ({
  participant,
  participantName,
  organizer,
  meetingLink,
}) => {
  const form = useRef();

  

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
            import.meta.env.VITE_S_SERVICE_ID,
            import.meta.env.VITE_S_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_S_PUBLIC_ID,
      );

      if (result.status === 200) {
        console.log("Email sent successfully!");
        form.current.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error.text);
    }
  };


  useEffect(() => {
      // Check if the participant's email is not your own email
      if (participant !== "") {
        // Send the email only if the participant's email is not yours
        sendEmail();
      }
    }, [participant]);
    


  return (
    <form ref={form} className="opacity-0 hidden">
      <input type="text" name="participant_name" value={participantName} />
      <input type="text" name="organizer_name" value={organizer} />
      <input type="email" name="user_email" value={participant} />
      <input type="text" name="meeting_link" value={meetingLink} />

      <textarea name="message" />
    </form>
  );
};
