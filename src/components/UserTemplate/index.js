import React from 'react';
import StatusCircle from '../StatusCircle';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import useUserActivity from '../../utils/useUserActivity';

const UserTemplate = ({ user, onPress }) => {
  const isLoggedIn = useUserActivity(user.uid);

  return (
    <TouchableOpacity onPress={() => onPress(user)} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <View style={styles.statusCircleContainer}>
          <StatusCircle active={isLoggedIn} />
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
    </TouchableOpacity>
  );
};

export default UserTemplate;