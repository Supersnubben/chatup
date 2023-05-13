import { Text, View, Image } from 'react-native'
import styles from './styles'
import React from 'react'

const ReceivedMessage = ({ message, isLastInSequence, user }) => {
  const date = new Date();
  const options = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  const formattedDate = date.toLocaleString('en-US', options).replace(',', ' kl');
  console.log(formattedDate);

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
      <View>
      <View style={[styles.container, styles.align]}>
        <Text>{message}</Text>
      </View>
      <View>
          { isLastInSequence ? <Text style={styles.date}>{formattedDate}</Text> : null }
        </View>
      </View>
    </View>
  )};

export default ReceivedMessage