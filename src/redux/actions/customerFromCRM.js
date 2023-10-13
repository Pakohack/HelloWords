export const CUSTOMER = 'CUSTOMER';

export const customerFromCRM = customer => {
  return {
    type: CUSTOMER,
    payload: customer,
  };
};
