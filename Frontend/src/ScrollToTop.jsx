import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adding delay

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
