import { useState, useEffect, useCallback } from 'react';

/**
 * Function that calculates if a user has scrolled pas a certain point.
 * @function VisibleOnScroll
 * @param {number} scrollLimit
 * @returns {boolean} visibleComp
 */

function VisibleOnScroll(scrollLimit) {
  const [visibleComp, setVisibleComp] = useState(false);

  const pastScrollLimit = useCallback(() => {
    window.scrollY >= scrollLimit
      ? setVisibleComp(true)
      : setVisibleComp(false);
  }, [scrollLimit]);

  useEffect(() => {
    window.addEventListener('scroll', pastScrollLimit);

    return () => {
      window.addEventListener('scroll', pastScrollLimit);
    };
  }, [pastScrollLimit]);

  return visibleComp;
}

export default VisibleOnScroll;
