import { FlatList, Image, TouchableOpacity, Text, View, BackHandler } from 'react-native'
import styles from './styles'
import React, { useState, useEffect, useCallback } from 'react'
import { LogoutButton, AddButton } from '../../components/common'
import fetchCurrentUser from '../../utils/fetchCurrentUser'
import { getDocs, collection } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase'
import ConversationTemplate from '../../components/chat/ConversationTemplate'
import { useFocusEffect } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [conversations, setConversations] = useState([]);

  const fetchConversations = useCallback(async (userId) => {
    // Fetch conversations for this user from Firebase
    const querySnapshot = await getDocs(collection(db, "conversations"));
    const conversationsData = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().user1Id.includes(userId) || doc.data().user2Id.includes(userId)) {
        conversationsData.push(doc.data());
      }
    });
    setConversations(conversationsData);
  }, []);

  useEffect(() => {
    fetchConversations(auth.currentUser.uid);
  }, [fetchConversations]);

  useFocusEffect(
    useCallback(() => {
      fetchConversations(auth.currentUser.uid);
    }, [fetchConversations])
  );

  const renderItem = ({ item }) => <ConversationTemplate conversation={item} />;



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
                source={{ uri: base64Image }}
                resizeMode="cover" />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <Text style={styles.text}>{user.name}</Text>
            </View>
            <LogoutButton style={styles.logout} onPress={handleLogout} />
          </View>
          <View style={styles.innerContainer}>
            <FlatList
              data={conversations}
              renderItem={renderItem}
              keyExtractor={(item) => item.id} />
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