export const CUSTOMER_ID = 'CUSTOMER_ID';

export const customerID = customerID => {
  return {
    type: CUSTOMER_ID,
    payload: customerID,
  };
};
