import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const UserTemplate = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
      </View>
      <Text style={styles.name}>{user.name}</Text>
    </View>
  );
};

export default UserTemplate;
