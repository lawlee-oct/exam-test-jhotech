import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email required'),
  password: yup.string().required('Password required').min(8, 'Min length 8 characters'),
});
