import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles'

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
        <View>
            <Text style={styles.buttonContainer}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
