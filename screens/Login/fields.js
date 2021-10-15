import {createRef} from 'react';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

const passwordInputRef = createRef();

export const fields = [
  {
    placeholder: 'Email',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
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
    innerRef: passwordInputRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    title: 'Remember Me?',
    containerStyle: {alignSelf: 'flex-end', margin: 10},
    component: Checkbox,
    name: 'rememberMe',
  },
];

export const loginInitialValues = {
  email: '',
  password: '',
  rememberMe: false,
};
