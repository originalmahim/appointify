// Function to format the link based on provided parameters
export function formatMeetingLink(gmailFirstPart, meeting) {
  const firstPart =
    gmailFirstPart.length < 10 ? gmailFirstPart : gmailFirstPart.slice(0, 10);

  const secondPart =
    meeting?.type.length > 10 ? meeting?.type.slice(0, 10) : meeting?.type;

  return `${firstPart}/${secondPart}.appointify.com`;
}
