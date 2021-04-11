import { useParams } from 'react-router-dom';

function GetParam() {
  const { id } = useParams();

  if (id !== undefined) {
    return true;
  } else return false;
}

export default GetParam;
