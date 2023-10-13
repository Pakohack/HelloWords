import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetIP = () => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_TO_GET_IP)
      .then(response => {
        setIpAddress(response.data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  return ipAddress;
};

export default useGetIP;
