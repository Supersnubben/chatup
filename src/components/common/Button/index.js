import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles'

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={handleSignIn} style={styles.buttonContainer}>
        <View>
            <Text style={styles.buttonContainer}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default Button;
