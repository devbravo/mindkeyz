import { useLocation } from 'react-router-dom';

/**
 * function using useParams hook, to get the parameter.
 * @function GetParam
 * @returns {boolean}
 */

function GetLocation() {
  const { pathname } = useLocation();

  if (pathname !== '/ ') {
    return true;
  } else return false;
}

export default GetLocation;
