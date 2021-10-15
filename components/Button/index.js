import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Typography from '../Typography';
import styles from './styles';

const Button = ({style, textStyle, title, ...rest}) => {
  return (
    <RectButton style={[styles.btn, style]} {...rest}>
      <View accessible accessibilityRole="button" accessibilityLabel="Login">
        <Typography variant="btnText" style={[styles.btnText, textStyle]}>
          {title.toUpperCase()}
        </Typography>
      </View>
    </RectButton>
  );
};

export default Button;
