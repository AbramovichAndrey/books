import { useState, useEffect } from "react";

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet,setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQueryListTablet = window.matchMedia("(max-width: 1120px)");
    setIsTablet(mediaQueryListTablet.matches);

    const mediaQueryListMobile = window.matchMedia("(max-width:768px)");
    setIsMobile(mediaQueryListMobile.matches);


    const handleMediaQueryChange = () => {
      setIsTablet(window.matchMedia("(max-width: 1120px)").matches);
      setIsMobile(window.matchMedia('(max-width:768px)').matches)
    };

    window.addEventListener("resize", handleMediaQueryChange);
 

    return () => {
      window.removeEventListener("resize", handleMediaQueryChange);
    };
  }, []);

  return { isMobile, isTablet  , isDesktop: !isMobile && !isTablet};
};


