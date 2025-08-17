import { useEffect, useState } from "react";

// all the helper function will be hear
// get the  screen size

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      console.log("Screen size changed:", window.innerWidth);
      setScreenSize(window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenSize, isMobile };
};
