import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styles from './styles'

const CustomTextInput = (props) => {
  return (
    <TextInput
      style={styles.textInput}
      {...props} //
    />
  );
};

export default CustomTextInput;
