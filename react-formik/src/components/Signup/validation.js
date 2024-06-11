import * as yup from 'yup';

const validations = yup.object({
  // name: string().required(),
  // age: number().required().positive().integer(),
  email: yup
    .string()
    // .email() // default message
    // .required(),
    .email('Please, enter a valid email address!')     // my error message
    .required('You have to enter your email address!'),  // my error message
  password: yup
    .string()
    // .min(5)
    .min(5, 'Your password must have at least 5 characters!')
    .required(),
  passwordConfirm: yup
    .string()
    // .oneOf([yup.ref('password')])  // default message
    .oneOf([yup.ref('password')], "Your password entries don't match!"),
  // createdOn: date().default(() => new Date()),
  // website: string().url().nullable(),
});

export default validations