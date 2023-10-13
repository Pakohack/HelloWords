import axios from 'axios';

const apiUrl = 'api/v2/open/customers';

const createNewCustomer = async (body, idempotencyKey) => {
  try {
    const response = await axios.post(apiUrl, body, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: process.env.REACT_APP_API_SECRET_DEVELOPER,
        'Idempotency-Key': idempotencyKey,
        'Content-Encoding': 'gzip',
      },
    });

    if (response.data && response.data.CustomerID) {
      return response.data.CustomerID;
    } else {
      throw new Error('Failed to create a new customer.');
    }
  } catch (error) {
    console.error('Error creating a new customer:', error.message);
  }
};

export default createNewCustomer;
