import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Function allowing smooth scroll to top upon page change
 * @function ScrollToTop
 * @returns {null}
 */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
