import React, {useState} from 'react';
import {View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import CheckboxIcon from '../../assets/Icons/check_box.svg';
import CheckboxOutlineIcon from '../../assets/Icons/check_box_outline.svg';
import Typography from '../Typography';
import styles from './styles';

const Checkbox = ({
  field: {value, name},
  form: {setFieldValue},
  title,
  containerStyle,
  btnStyle,
  txtStyle,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(value);
  return (
    <View style={[styles.container, containerStyle]}>
      <BorderlessButton
        style={[styles.btn, btnStyle]}
        onPress={() => {
          setIsChecked(val => {
            setFieldValue(name, !val);
            return !val;
          });
        }}>
        {isChecked ? (
          <CheckboxIcon height={24} width={24} fill="dodgerblue" />
        ) : (
          <CheckboxOutlineIcon height={24} width={24} fill="dodgerblue" />
        )}
      </BorderlessButton>
      <Typography variant="body2" style={[txtStyle]}>
        {title}
      </Typography>
    </View>
  );
};

export default Checkbox;
