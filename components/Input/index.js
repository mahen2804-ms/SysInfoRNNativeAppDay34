import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Typography from '../Typography';
import styles from './styles';
import VisibilityOffIcon from '../../assets/Icons/visibility_off.svg';
import VisibilityIcon from '../../assets/Icons/visibility.svg';
import {BorderlessButton} from 'react-native-gesture-handler';

const Input = ({
  field: {value, name},
  form: {handleChange, handleBlur, touched, errors},
  innerRef,
  secureTextEntry,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={{margin: 8}}>
      <TextInput
        ref={innerRef}
        style={styles.input}
        name={name}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        secureTextEntry={!!secureTextEntry && !isPasswordVisible}
        {...rest}
      />
      {touched[name] && errors[name] && (
        <Typography variant="error">{errors[name]}</Typography>
      )}
      {secureTextEntry && (
        <BorderlessButton
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 10,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? (
            <VisibilityIcon height={24} width={24} fill="red" />
          ) : (
            <VisibilityOffIcon height={24} width={24} fill="red" />
          )}
        </BorderlessButton>
      )}
    </View>
  );
};

export default Input;
