import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../../redux/actions/popUp';
import PopUpLayout from '../../molecules/PopUpLayout';
import CustomerData from './CustomerData';
import CreditCardData from './CreditCardData';
import CommonLoader from '../../atoms/CommonLoader';
import Error500 from '../../atoms/Error500';
import AfterCreateTransactionMessage from '../../atoms/AfterCreateTransactionMessage';

function Popup() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccessfully, setIsSuccessfully] = useState({
    show: false,
    status: null,
  });

  const showSuccessfulMessage = message => {
    setIsSuccessfully({ show: true, status: message });
  };

  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  const userAuth0 = useSelector(state => state.userAuth0);
  const customerFromCRM = useSelector(state => state.customerFromCRM);
  const customerID = useSelector(state => state.customerID);

  let paymentPopUpTitle = `Dear customer, could you please provide us with your personal information?`;

  if (userAuth0?.given_name) {
    paymentPopUpTitle = `Dear ${userAuth0?.given_name}, could you please provide us with your personal information?`;
  }

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  useEffect(() => {
    if (customerID) {
      stopLoading();
    }

    if (isError || isSuccessfully.show) {
      const timer = setTimeout(() => {
        handleClosePopup();
        setIsError(false);
        setIsSuccessfully({ show: false, status: null });
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccessfully.show]);

  return (
    <PopUpLayout>
      {isError ? (
        <Error500 />
      ) : isSuccessfully.show ? (
        <AfterCreateTransactionMessage message={isSuccessfully?.status} />
      ) : (
        <>
          {!isLoading ? (
            <div>
              {customerFromCRM?.CustomerID || customerID ? (
                <CreditCardData
                  customerID={customerFromCRM?.CustomerID || customerID}
                  startLoading={startLoading}
                  stopLoading={stopLoading}
                  showSuccessfulMessage={showSuccessfulMessage}
                />
              ) : (
                <>
                  <h2 className="max-w-[250px] md:max-w-[480px] lg:max-w-full text-center text-[14px] lg:text-[18px] leading-[22px] lg:leading-[26px] mb-[24px] lg:mb-[40px] text-white font-semibold">
                    {paymentPopUpTitle}
                  </h2>
                  <CustomerData
                    email={userAuth0?.email}
                    lastName={userAuth0?.family_name}
                    firstName={userAuth0?.given_name}
                    startLoading={startLoading}
                    stopLoading={stopLoading}
                    setIsError={setIsError}
                  />
                </>
              )}
            </div>
          ) : (
            <CommonLoader />
          )}
        </>
      )}
    </PopUpLayout>
  );
}

export default Popup;
