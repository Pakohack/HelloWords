export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = user => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
