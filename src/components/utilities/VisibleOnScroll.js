import { useState } from 'react';

/**
 * Function that calculates if a user has scrolled pas a certain point.
 * @function VisibleOnScroll
 * @param {number} scrollLimit
 * @returns {boolean} visibleComp
 */

function VisibleOnScroll(scrollLimit) {
  const [visibleComp, setVisibleComp] = useState(false);

  const pastScrollLimit = () => {
    window.scrollY >= scrollLimit
      ? setVisibleComp(true)
      : setVisibleComp(false);
  };

  window.addEventListener('scroll', pastScrollLimit);
  return visibleComp;
}

export default VisibleOnScroll;
