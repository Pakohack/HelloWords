import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import useGetCustomers from './hooks/useGetCustomers';
import useIdempotencyKeyUpdate from './hooks/useIdempotencyKeyUpdate';
import Popup from './components/organism/pop-up';
import {
  Main,
  //  Film
} from './pages';
import CommonLoader from './components/atoms/CommonLoader';

const App = () => {
  const { isLoading } = useAuth0();
  useGetCustomers();
  useIdempotencyKeyUpdate();

  if (isLoading) {
    return (
      <CommonLoader className="absolute top-0 bottom-0 left-0 right-0 h-screen w-screen flex items-center justify-center" />
    );
  }

  return (
    <div className="App text-center">
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/film" element={<Film />} /> */}
      </Routes>
      <Popup />
    </div>
  );
};

export default App;
