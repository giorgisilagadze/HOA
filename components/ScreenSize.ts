import { useState, useEffect } from "react";

const ScreenSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    // Check if window is defined (not in SSR)
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleWindowResize);

      // Initial window size
      setWindowSize([window.innerWidth, window.innerHeight]);

      return () => {
        // Remove event listener when component unmounts
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  return windowSize[0];
};

export default ScreenSize;
