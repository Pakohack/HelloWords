export const CUSTOMERS_LIST = 'CUSTOMERS_LIST';

export const customersListFromCRM = list => {
  return {
    type: CUSTOMERS_LIST,
    payload: list,
  };
};
