import { useParams } from 'react-router-dom';

function ChangeParam() {
  const { id } = useParams();

  if (id !== undefined) {
    return true;
  } else return false;
}

export default ChangeParam;
