import { Text, View, Image } from 'react-native'
import styles from './styles'
import React from 'react'

const ReceivedMessage = ({ message, isLastInSequence, user }) => {
  const containerStyle = isLastInSequence
    ? styles.lastMessageContainer
    : styles.messageContainer;
  return (
    <View style={styles.outerContainer}>
      <View style={styles.imageContainer}>
        <View>
          {isLastInSequence ? <Image style={styles.image} source={{ uri: user.image }} /> : <View style={styles.messageContainer}></View>}
        </View>
      </View>
      <View style={[styles.container, styles.align]}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

export default ReceivedMessage