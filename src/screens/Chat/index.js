import { KeyboardAvoidingView, Text, View, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { BackButtonPrimary } from '../../components/common';
import themes from '../../utils/themes';
import { addDoc, collection, serverTimestamp, query, onSnapshot, orderBy, where } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase';
import SentMessage from '../../components/chat/SentMessage'
import ReceivedMessage from '../../components/chat/RecievedMessage'

const ChatScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [message, setMessage] = useState('');
  
  const sendMessage = async (senderId, receiverId, content) => {
    try {
      await addDoc(collection(db, 'messages'), {
        senderId,
        receiverId,
        content,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleBack = () => {
    navigation.navigate('HomeScreen');
  }

  const handleSend = () => {
    if (message.trim().length > 0) {
      sendMessage(auth.currentUser.uid, user.uid, message);
      setMessage('');
  }
}
  return (
    <KeyboardAvoidingView style={styles.container}>
      {user && (
        <>

          <View style={styles.header}>
            <BackButtonPrimary style={styles.backButton} onPress={handleBack} />
            <TouchableOpacity>
              <Image
                style={styles.profileImage}
                source={{ uri: user.image }}
                resizeMode="cover" />
            </TouchableOpacity>
            <View style={styles.nameContainer}>
              <Text style={styles.text}>{user.name}</Text>
            </View>

          </View>
          <View style={styles.innerContainer}>
            <FlatList 
              data={messages}
              renderItem={({ item }) => {
                const isSentMessage = item.senderId === auth.currentUser.uid;
                return isSentMessage ? (
                  <SentMessage content={item.content} />
                  ) : (
                    <ReceivedMessage content={item.content} />
                  );
                }}
                keyExtractor={(item) => item.id} />
          </View>
          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              placeholder='Write something'
              placeholderTextColor={themes.colors.textSecondary}
              value={message}
              onChangeText={text => setMessage(text)}
            />
            <TouchableOpacity onPress={handleSend}>
              <Image 
                source={require('../../../images/sendbutton.png')} 
                style={styles.sendButton} />
            </TouchableOpacity>

          </View>
        </>
      )}
    </KeyboardAvoidingView>
  )
}

export default ChatScreen