import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Without this, opening a new page from the footer keeps you at the bottom of it.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
