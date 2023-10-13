import { LOGIN_USER } from '../actions/userAuth0';

const userAuth0Reducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userAuth0Reducer;
