import { FlatList, Image, TouchableOpacity, Text, View, BackHandler } from 'react-native'
import styles from './styles'
import React, { useState, useEffect, useCallback } from 'react'
import { LogoutButton, AddButton } from '../../components/common'
import fetchCurrentUser from '../../utils/fetchCurrentUser'
import { getDoc, collection, doc as firestoreDoc, onSnapshot, query } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase'
import ConversationTemplate from '../../components/chat/ConversationTemplate'
import { useFocusEffect } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [conversations, setConversations] = useState([]);

  const fetchConversations = useCallback((userId) => {
    const unsubscribe = onSnapshot(query(collection(db, "conversations")), async (querySnapshot) => {
      const conversationsData = await Promise.all(querySnapshot.docs.map(async (doc) => {
        const conversation = doc.data();
        if (conversation.user1Id === userId || conversation.user2Id === userId) {
          const otherUserId = conversation.user1Id === userId ? conversation.user2Id : conversation.user1Id;
          const otherUserDoc = await getDoc(firestoreDoc(db, "users", otherUserId));
          const otherUser = otherUserDoc.data();
          return { ...conversation, otherUser };
        }
        return null;
      }));
      setConversations(conversationsData.filter(conversation => conversation !== null));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = fetchConversations(auth.currentUser.uid);
    return () => unsubscribe();
  }, [fetchConversations]);

  useFocusEffect(
    useCallback(() => {
      fetchConversations(auth.currentUser.uid);
    }, [fetchConversations])
  );

  const renderItem = ({ item }) => <ConversationTemplate conversation={item} onPress={handleUserPress} />;



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

  const handleUserPress = (selectedConversation) => {
    navigation.navigate('ChatScreen', { user: selectedConversation.otherUser });
  };


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
              keyExtractor={(item) => item.uid} />
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