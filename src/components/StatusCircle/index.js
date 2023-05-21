import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const StatusCircle = ({ active }) => {
    const circleColor = active ? 'rgba(0, 223, 46, 0.8)' : 'rgba(255, 0, 0, 0.8)';

    return <View style={[styles.circle, { backgroundColor: circleColor }]} />;
};

export default StatusCircle;