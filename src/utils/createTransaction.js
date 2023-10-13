import axios from 'axios';
import fetchCustomerById from './fetchCustomerById';

const apiUrl = 'api/v2/open/orders';

const createTransaction = async (creditCard, customerID, idempotencyKey) => {
  const customer = await fetchCustomerById(customerID);

  try {
    const response = await axios.post(
      apiUrl,
      {
        CustomerID: customerID,
        IpAddress: customer.IpAddress,
        BillingAddress: {
          FirstName: customer.FirstName,
          LastName: customer.LastName,
          Address1: customer.Address1,
          Address2: customer.Address2,
          City: customer.City,
          State: customer.State,
          Zipcode: customer.Zipcode,
        },
        PaymentInformation: creditCard,
        Products: [
          {
            ProductID: process.env.REACT_APP_PRODUCT_ID,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_API_SECRET_DEVELOPER,
          'Idempotency-Key': idempotencyKey,
          'Content-Encoding': 'gzip',
        },
      },
    );
    if (response.data) {
      return response.data?.Transaction?.OrderInfo?.ResponseText;
    } else {
      throw new Error('Failed to create a transaction.');
    }
  } catch (error) {
    console.error('Error creating a new transaction:', error.message);
  }
};

export default createTransaction;
