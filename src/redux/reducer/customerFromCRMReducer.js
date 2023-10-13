import { CUSTOMER } from '../actions/customerFromCRM';

const customerFromCRMReducer = (state = null, action) => {
  switch (action.type) {
    case CUSTOMER:
      return action.payload;
    default:
      return state;
  }
};

export default customerFromCRMReducer;
