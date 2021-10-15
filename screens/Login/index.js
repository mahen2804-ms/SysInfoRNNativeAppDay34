import React from 'react';
import {View, Keyboard} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import {fields, loginInitialValues} from './fields';
import axiosInstance from '../../utils/axiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const headerHeight = useHeaderHeight();

  const onSubmit = async (values, actions) => {
    try {
      const {rememberMe, ...rest} = values;
      const res = await axiosInstance.post('login', rest);
      await AsyncStorage.setItem('@user_info', JSON.stringify(res.data));
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } catch (error) {
      actions.setErrors({serverError: error.response.data});
    }
  };

  return (
    <View style={{paddingTop: headerHeight, flex: 1}}>
      <Form
        fields={fields}
        initialValues={loginInitialValues}
        onSubmit={onSubmit}
        btnProps={{
          title: 'Login',
        }}
      />
      <Typography style={{textAlign: 'center', marginVertical: 10}}>
        Don't Have Acount? Please{` `}
        <Typography
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{
            color: 'red',
            textDecorationLine: 'underline',
          }}>
          Signup
        </Typography>
      </Typography>
    </View>
  );
};

export default Login;
