import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import styles from './styles'

const TextInput = (props) => {
  return (
    <TextInput
      style={styles.textInput}
      {...props} //
    />
  );
};

export default TextInput;
