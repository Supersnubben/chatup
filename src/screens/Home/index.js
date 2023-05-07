import { FlatList, Image, TouchableOpacity, Text, View, BackHandler } from 'react-native'
import styles from './styles'
import React, { useState, useEffect } from 'react'
import { LogoutButton, AddButton } from '../../components/common'
import fetchCurrentUser from '../../utils/fetchCurrentUser'
import { auth } from '../../utils/firebase'

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const userData = await fetchCurrentUser(userId);
      setUser(userData);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const backAction = () => {
      handleLogout();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleLogout = () => {
    navigation.navigate('LoginScreen');
  };

  const handleAddButton = () => {
    navigation.navigate('UserScreen');
  }

  const base64Image = user.image;

  return (
    <View style={styles.outerContainer}>
      {user && (
      <>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
            style={styles.profileImage}
            source={{uri: base64Image}}
            resizeMode="cover" />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={styles.text}>{user.name}</Text>
        </View>
        <LogoutButton style={styles.logout} onPress={handleLogout} />
      </View>
      <View style={styles.innerContainer}>
        <FlatList>

        </FlatList>
      </View>
      <View style={styles.footer}>
        <AddButton onPress={handleAddButton} />
      </View>
      </>
    )}
    </View>
  )
}

export default HomeScreen