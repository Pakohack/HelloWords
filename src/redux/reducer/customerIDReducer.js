import { CUSTOMER_ID } from '../actions/customerID';

const customerIDReducer = (state = null, action) => {
  switch (action.type) {
    case CUSTOMER_ID:
      return action.payload;
    default:
      return state;
  }
};

export default customerIDReducer;
