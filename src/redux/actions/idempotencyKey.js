export const SET_IDEMPOTENCY_KEY = 'SET_IDEMPOTENCY_KEY';

export const setIdempotencyKey = idempotencyKey => ({
  type: SET_IDEMPOTENCY_KEY,
  payload: idempotencyKey,
});
