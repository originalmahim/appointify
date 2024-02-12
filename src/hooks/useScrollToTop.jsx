import { useEffect, useState } from "react";

const useScrollToTop = (scrollThreshold = 40) => {
  const [isScrollVisible, setScrollVisible] = useState(false);

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add an event listener to check the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return { isScrollVisible, scrollToTop };
};

export default useScrollToTop;