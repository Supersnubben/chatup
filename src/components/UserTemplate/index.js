import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const UserTemplate = ({ user, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(user)} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
      </View>
      <Text style={styles.name}>{user.name}</Text>
    </TouchableOpacity>
  );
};

export default UserTemplate;