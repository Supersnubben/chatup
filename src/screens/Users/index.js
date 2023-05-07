import { FlatList, TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'
import React, { useState, useEffect } from 'react'
import { BackButtonPrimary } from '../../components/common'
import fetchUsers from '../../utils/fetchUsers'
import UserTemplate from '../../components/UserTemplate'


const UserScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await fetchUsers();
      const sortedUsers = Object.values(usersData).sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      setUsers(sortedUsers);
    };

    fetchData();
  }, []);
  

const handleBack = () => {
  navigation.navigate('HomeScreen');
}

const renderItem = ({ item }) => <UserTemplate user={item} />;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
          <BackButtonPrimary style={styles.button} onPress={handleBack}/>
          <Text style={styles.text}>Select user</Text>
      </View>
      <View style={styles.innerContainer}>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} />
      </View>
      <View style={styles.footer}>
      </View>
    </View>
  )
}

export default UserScreen