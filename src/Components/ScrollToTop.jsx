import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Opens every new page at the top, unless the link points at a section
// (like /about#team), in which case it scrolls to that section instead.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToSection = () =>
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      // wait one frame so the new page has finished drawing
      requestAnimationFrame(scrollToSection);
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
