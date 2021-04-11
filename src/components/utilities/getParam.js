import { useParams } from 'react-router-dom';

/**
 * function using useParams hook, to get the parameter.
 * @function GetParam
 * @returns {boolean}
 */

function GetParam() {
  const { id } = useParams();

  if (id !== undefined) {
    return true;
  } else return false;
}

export default GetParam;
