import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import createTransaction from '../../../utils/createTransaction';
import creditCarkMockImg from '../../../assets/credit-card-mock.png';
import CommonInput from '../../atoms/CommonInput';
import ActionButton from '../../atoms/ActionButton';

const formCardFields = [
  {
    id: 1,
    label: 'CC Number',
    name: 'CCNumber',
    type: 'number',
  },
  {
    id: 2,
    label: 'Month',
    name: 'ExpMonth',
    type: 'number',
  },
  {
    id: 3,
    label: 'Year',
    name: 'ExpYear',
    type: 'number',
  },
  {
    id: 4,
    label: 'Name On Card',
    name: 'NameOnCard',
  },
  {
    id: 5,
    label: 'CVV',
    name: 'CVV',
    type: 'number',
  },
];

const validationSchemaToCreditCardForm = Yup.object().shape({
  CCNumber: Yup.string().required('Credit Card Number is required'),
  ExpMonth: Yup.number()
    .required('Month is required')
    .min(1, 'Month must be at least 1')
    .max(12, 'Month cannot be greater than 12'),
  ExpYear: Yup.number()
    .required('Year is required')
    .min(1900, 'Year must be at least 1900'),
  NameOnCard: Yup.string().required('Name On Card is required'),
  CVV: Yup.string().required('CVV is required'),
});

const CreditCardData = ({
  customerID,
  startLoading,
  stopLoading,
  showSuccessfulMessage,
}) => {
  const idempotencyKey = uuidv4();
  const formikCreditCardData = useFormik({
    initialValues: {
      CCNumber: '',
      ExpMonth: '',
      ExpYear: '',
      NameOnCard: '',
      CVV: '',
    },
    validationSchema: validationSchemaToCreditCardForm,
    onSubmit: async values => {
      startLoading();
      const message = await createTransaction(
        values,
        customerID,
        idempotencyKey,
      );
      showSuccessfulMessage(message);
      stopLoading();
    },
  });

  return (
    <div className="flex justify-center lg:justify-between items-center flex-col md:flex-row lg:gap-[20px] max-h-full">
      <img
        src={creditCarkMockImg}
        alt="credit card"
        className="w-full md-sm:w-1/2"
      />
      <form onSubmit={formikCreditCardData.handleSubmit}>
        {formCardFields.map(field => (
          <div key={field.id} className="relative mb-[20px]">
            <CommonInput
              name={field.name}
              type={field.type}
              label={field.label}
              onChange={formikCreditCardData.handleChange}
              onBlur={formikCreditCardData.handleBlur}
              value={formikCreditCardData.values[field.name]}
            />
            {formikCreditCardData.touched[field.name] &&
              formikCreditCardData.errors[field.name] && (
                <div className="text-red-500 absolute text-[12px] top-[calc(100%+3px)] left-0 whitespace-nowrap">
                  {formikCreditCardData.errors[field.name]}
                </div>
              )}
          </div>
        ))}
        <ActionButton
          type="submit"
          className="w-[calc(100%-40px)] md-sm:w-[150px] h-[48px] text-[16px] leading-[24px] lg:text-[18px] right-0 bottom-[100px]"
          label="Submit"
        />
      </form>
    </div>
  );
};

export default CreditCardData;
