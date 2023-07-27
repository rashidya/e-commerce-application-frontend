import * as Yup from 'yup';


  // Validation schema for the LoginPage component
export const validationSchemaLogin = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  // Validation schema for the SignupPage component
export const validationSchemaSignup = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    name: Yup.string().required('Name is required'),
  });