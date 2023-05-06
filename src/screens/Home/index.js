import { FlatList, Image, TouchableOpacity, Text, View, BackHandler } from 'react-native'
import styles from './styles'
import React, { useEffect } from 'react'
import { LogoutButton, AddButton } from '../../components/common'

const HomeScreen = ({ navigation }) => {

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

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.profileImage}>
          </View>
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Robin Blondin</Text>
        </View>
        <LogoutButton onPress={handleLogout} />
      </View>
      <View style={styles.innerContainer}>
        <FlatList>

        </FlatList>
      </View>
      <View style={styles.header}>
        <AddButton onPress={handleAddButton} />
      </View>
    </View>
  )
}

export default HomeScreen