import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { setIdempotencyKey } from '../redux/actions/idempotencyKey';

const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');
const year = today.getFullYear();

const id = uuidv4();
const formattedDate = `${month}/${day}/${year}`;

const useIdempotencyKeyUpdate = () => {
  const dispatch = useDispatch();
  const current_idempotencyKey = useSelector(state => state.idempotencyKey);
  if (
    !current_idempotencyKey ||
    formattedDate !== current_idempotencyKey?.today
  ) {
    dispatch(setIdempotencyKey({ today: formattedDate, idempotencyKey: id }));
  }
};

export default useIdempotencyKeyUpdate;
