import { useState, useEffect } from "react";

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQueryListMobile = window.matchMedia("(max-width: 1120px)");

    setIsMobile(mediaQueryListMobile.matches);

    const handleMediaQueryChange = () => {
      setIsMobile(window.matchMedia("(max-width: 1120px)").matches);
    };

    window.addEventListener("resize", handleMediaQueryChange);

    return () => {
      window.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);
  return { isMobile, isDesktop: !isMobile };
};
