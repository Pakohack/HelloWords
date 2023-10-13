import { combineReducers } from 'redux';
import userAuth0Reducer from './userAuth0Reducer';
import customersListFromCRMReducer from './customersListFromCRMReducer';
import customerFromCRMReducer from './customerFromCRMReducer';
import popUpReducer from './popUpReducer';
import customerIDReducer from './customerIDReducer';
import idempotencyKeyReducer from './idempotencyKeyReducer';

const rootReducer = combineReducers({
  userAuth0: userAuth0Reducer,
  customersList: customersListFromCRMReducer,
  customerFromCRM: customerFromCRMReducer,
  popUp: popUpReducer,
  customerID: customerIDReducer,
  idempotencyKey: idempotencyKeyReducer,
});

export default rootReducer;
