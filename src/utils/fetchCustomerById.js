import axios from 'axios';

const fetchCustomerById = async customerId => {
  try {
    const response = await axios.get(
      `api/v2/open/customers?customerid=${customerId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_API_SECRET_DEVELOPER,
        },
      },
    );
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Request failed with status code ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    return null;
  }
};

export default fetchCustomerById;
