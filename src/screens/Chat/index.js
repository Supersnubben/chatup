import { KeyboardAvoidingView, Text, View, TouchableOpacity, Image, FlatList, TextInput, BackHandler } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from './styles';
import { BackButtonPrimary } from '../../components/common';
import themes from '../../utils/themes';
import { updateDoc, getDocs, addDoc, collection, serverTimestamp, query, onSnapshot, orderBy, where } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase';
import SentMessage from '../../components/chat/SentMessage'
import ReceivedMessage from '../../components/chat/RecievedMessage'

const ChatScreen = ({ route, navigation }) => {
  const { user } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const senderId = auth.currentUser.uid;
  const receiverId = user.uid;

  const fetchMessages = (senderId, receiverId) => {
    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('senderId', 'in', [senderId, user.uid]),
      where('receiverId', 'in', [senderId, user.uid]),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        const messageData = doc.data();
        messages.unshift({ id: doc.id, ...messageData });
      });
      setMessages(messages);
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = fetchMessages(auth.currentUser.uid, user.uid);
    return () => unsubscribe();
  }, []);

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

    const conversationRef = collection(db, 'conversations');
    const q = query(
      conversationRef,
      where('user1Id', 'in', [senderId, receiverId]),
      where('user2Id', 'in', [senderId, receiverId])
    );
    const conversationSnapshot = await getDocs(q);

    if (!conversationSnapshot.empty) {
      const conversationId = conversationSnapshot.docs[0].id;
      await addDoc(collection(db, `conversations/${conversationId}/messages`), {
        senderId,
        receiverId,
        content,
        createdAt: serverTimestamp(),
      });
      // Update the lastMessage field
      await updateDoc(doc(db, 'conversations', conversationId), {
        lastMessage: content,
        createdAt: serverTimestamp(),
      });
    } else {
      // If the conversation doesn't exist, create it and add the message
      const conversationRef = await addDoc(collection(db, 'conversations'), {
        user1Id: senderId,
        user2Id: receiverId,
        lastMessage: content,
        createdAt: serverTimestamp(),
      });
      await addDoc(collection(db, `conversations/${conversationRef.id}/messages`), {
        senderId,
        receiverId,
        content,
        createdAt: serverTimestamp(),
      });
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

  useEffect(() => {
    const backAction = () => {
      handleBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  })
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
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
              inverted
              data={messages}
              initialNumToRender={10}
              renderItem={({ item, index }) => {
                const isSentMessage = item.senderId === auth.currentUser.uid;
                const nextMessage = messages[index - 1];
                const isLastInSequence = nextMessage
                  ? nextMessage.senderId !== item.senderId
                  : true;
                return isSentMessage ? (
                  <SentMessage message={item.content} />
                ) : (
                  <ReceivedMessage message={item.content} isLastInSequence={isLastInSequence} user={user} />
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
              onSubmitEditing={handleSend}
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