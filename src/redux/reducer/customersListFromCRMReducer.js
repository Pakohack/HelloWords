import { CUSTOMERS_LIST } from '../actions/customersListFromCRM';

const customersListFromCRMReducer = (state = null, action) => {
  switch (action.type) {
    case CUSTOMERS_LIST:
      return { ...action.payload };
    default:
      return state;
  }
};

export default customersListFromCRMReducer;
