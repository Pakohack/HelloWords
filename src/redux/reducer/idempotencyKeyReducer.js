import { SET_IDEMPOTENCY_KEY } from '../actions/idempotencyKey';

const idempotencyKeyReducer = (state = null, action) => {
  switch (action.type) {
    case SET_IDEMPOTENCY_KEY:
      return action.payload;
    default:
      return state;
  }
};

export default idempotencyKeyReducer;
