import {createRef} from 'react';

import Input from '../../components/Input';

const emailRef = createRef();
const ageRef = createRef();
const lastNameRef = createRef();
const passwordRef = createRef();
const confirmPasswordRef = createRef();

export const registerFields = [
  {
    placeholder: 'First Name',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      lastNameRef.current.focus();
    },
    name: 'firstName',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: lastNameRef,
    placeholder: 'Last Name',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      ageRef.current.focus();
    },
    name: 'lastName',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: ageRef,
    placeholder: 'Age',
    returnKeyType: 'next',
    keyboardType: 'number-pad',
    maxLength: 3,
    onSubmitEditing: () => {
      emailRef.current.focus();
    },
    name: 'age',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      if (value < 1 || value > 100) {
        return 'Value should be between 0 and 100';
      }
      return '';
    },
  },
  {
    innerRef: emailRef,
    placeholder: 'Email',
    autoCapitalize: 'none',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordRef.current.focus();
    },
    name: 'email',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    innerRef: passwordRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
    onSubmitEditing: () => {
      confirmPasswordRef.current.focus();
    },
  },
  {
    innerRef: confirmPasswordRef,
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    name: 'confirmPassword',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      if (value.length < 5) {
        return '';
      }
      return '';
    },
  },
];

export const registerInitialValues = {
  firstName: '',
  lastName: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};
