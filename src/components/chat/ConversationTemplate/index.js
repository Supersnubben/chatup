import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import formattedDate from '../RecievedMessage'

const ConversationTemplate = (user, conversation, lastMessage) => {
  return (
    <View style={styles.outerContainer}>
        <View style={styles.imageContainer}>
            <Image source={{ uri: user.image }} style={styles.profileImage} />
        </View>
        <View style={styles.infoContainer}>
            <View>
                <Text style={styles.nameText}>{user.name}</Text>
            </View>
            <View>
                <Text style={styles.messageText}>{lastMessage} - {formattedDate}</Text>
            </View>
        </View>
      
    </View>
  )
}

export default ConversationTemplate