import React from 'react';
import moment from 'moment-timezone';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { customerID } from '../../../redux/actions/customerID';
import useGetIP from '../../../hooks/useGetIP';
import createNewCustomer from '../../../utils/createNewCustomer';
import CommonInput from '../../atoms/CommonInput';
import ActionButton from '../../atoms/ActionButton';

const timeZone = 'America/Chicago';
const today = moment().tz(timeZone);
const start_trial = today.format('MM/DD/YYYY');
const end_trial = today.clone().add(7, 'days').format('MM/DD/YYYY');

const formUserFieldsWithName = [
  {
    id: 1,
    label: 'First Name',
    name: 'FirstName',
  },
  {
    id: 2,
    label: 'Last Name',
    name: 'LastName',
  },
  {
    id: 3,
    label: 'Address 1',
    name: 'Address1',
  },
  {
    id: 4,
    label: 'Address 2',
    name: 'Address2',
  },
  {
    id: 5,
    label: 'City',
    name: 'City',
  },
  {
    id: 6,
    label: 'State',
    name: 'State',
  },
  {
    id: 7,
    label: 'Zipcode',
    name: 'Zipcode',
  },
  {
    id: 8,
    label: 'Country',
    name: 'Country',
  },
  {
    id: 9,
    label: 'Phone',
    name: 'Phone',
  },
];

const formUserFieldsWithOutName = [
  {
    id: 3,
    label: 'Address 1',
    name: 'Address1',
  },
  {
    id: 4,
    label: 'Address 2',
    name: 'Address2',
  },
  {
    id: 5,
    label: 'City',
    name: 'City',
  },
  {
    id: 6,
    label: 'State',
    name: 'State',
  },
  {
    id: 7,
    label: 'Zipcode',
    name: 'Zipcode',
  },
  {
    id: 8,
    label: 'Country',
    name: 'Country',
  },
  {
    id: 9,
    label: 'Phone',
    name: 'Phone',
  },
];

const validationSchemaToUserForm = Yup.object().shape({
  FirstName: Yup.string().required('First Name is required'),
  LastName: Yup.string().required('Last Name is required'),
  Address1: Yup.string().required('Address 1 is required'),
  Address2: Yup.string(),
  City: Yup.string().required('City is required'),
  State: Yup.string().required('State is required'),
  Zipcode: Yup.string().required('Zipcode is required'),
  Country: Yup.string().required('Country is required'),
  Phone: Yup.string().required('Phone is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
});

const fieldsWithName = {
  FirstName: '',
  LastName: '',
  Address1: '',
  Address2: '',
  City: '',
  State: '',
  Zipcode: '',
  Country: '',
  Phone: '',
};

const fieldsWithOutName = {
  Address1: '',
  Address2: '',
  City: '',
  State: '',
  Zipcode: '',
  Country: '',
  Phone: '',
};

const CustomerData = ({
  email,
  lastName,
  firstName,
  startLoading,
  stopLoading,
  setIsError,
}) => {
  const idempotencyKey = useSelector(
    state => state.idempotencyKey.idempotencyKey,
  );
  const dispatch = useDispatch();
  const IpAddress = useGetIP();

  const formUserFields = lastName
    ? formUserFieldsWithOutName
    : formUserFieldsWithName;

  const formikUserData = useFormik({
    initialValues: lastName ? fieldsWithOutName : fieldsWithName,
    validationSchemaToUserForm,
    onSubmit: async values => {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const updatedValues = {
        SiteID: Number(process.env.REACT_APP_API_SITE_ID),
        SiteName: process.env.REACT_APP_API_SITE_NAME,
        FirstName: firstName ? firstName : values.FirstName,
        LastName: lastName ? lastName : values.LastName,
        Address1: values.Address1,
        Address2: values.Address2,
        City: values.City,
        State: values.State,
        Zipcode: values.Zipcode,
        Country: values.Country,
        Phone: values.Phone,
        Email: email,
        DateEnteredUtc: currentTimestamp,
        StepType: 'Buyer',
        IpAddress: IpAddress,
        IsTest: false,
        IsChargeback: false,
        IsCancelled: false,
        SessionID: null,
        TrialStart: start_trial,
        EndTrial: end_trial,
      };
      startLoading();
      const customer_id = await createNewCustomer(
        updatedValues,
        idempotencyKey,
      );
      customer_id ? dispatch(customerID(customer_id)) : setIsError(true);
      stopLoading();
    },
  });

  return (
    <form
      onSubmit={formikUserData.handleSubmit}
      className="h-full flex flex-col gap-[20px] justify-center items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[100px] content-center">
        {formUserFields.map(field => (
          <div key={field.id} className="relative">
            <CommonInput
              name={field.name}
              type="text"
              label={field.label}
              onChange={formikUserData.handleChange}
              onBlur={formikUserData.handleBlur}
              value={formikUserData.values[field.name]}
            />
            {formikUserData.touched[field.name] &&
              formikUserData.errors[field.name] && (
                <div className="text-red-500 absolute text-[28px] top-0 left-[calc(100%+10px)] whitespace-nowrap">
                  *
                </div>
              )}
          </div>
        ))}
      </div>
      <ActionButton
        type="submit"
        className="w-full sm:w-[240px] h-[48px] text-[16px] leading-[24px] lg:text-[18px] right-0 bottom-[100px]"
        label="Submit"
      />
    </form>
  );
};

export default CustomerData;
