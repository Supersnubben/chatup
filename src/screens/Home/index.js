import { FlatList, Image, TouchableOpacity, Text, View, BackHandler } from 'react-native'
import styles from './styles'
import React, { useEffect } from 'react'

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
        <TouchableOpacity onPress={handleLogout}>
          <Image
            style={styles.logout}
            source={require('/home/robin/repos/chatup/images/logout.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <FlatList>

        </FlatList>
      </View>
      <View style={styles.header}>
        <TouchableOpacity>
          <View>
            <Image
              style={styles.add}
              source={require('/home/robin/repos/chatup/images/addButton.png')} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen