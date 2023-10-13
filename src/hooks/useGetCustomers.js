import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { customersListFromCRM } from '../redux/actions/customersListFromCRM';

const useGetCustomers = () => {
  const dispatch = useDispatch();
  const apiUrl = `api/v2/open/customers`;


  useEffect(() => {
    const fetchData = () => {
      const axiosConfig = {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: process.env.REACT_APP_API_SECRET_DEVELOPER,
        },
      };

      axios
        .get(apiUrl, axiosConfig)
        .then(response => {
          dispatch(
            customersListFromCRM(
              response.data.Customers?.filter(
                user =>
                  user.SiteID === Number(process.env.REACT_APP_API_SITE_ID) &&
                  user.SiteName === process.env.REACT_APP_API_SITE_NAME,
              ),
            ),
          );
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGetCustomers;
