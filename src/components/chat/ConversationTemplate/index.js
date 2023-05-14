import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import getUserById from '../../../utils/getUserById'
import { auth } from '../../../utils/firebase'

const ConversationTemplate = ({ conversation, onPress }) => {
    const [otherUser, setOtherUser] = useState(null);

    const lastMessageTimestamp = conversation.createdAt.toDate();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const day = days[lastMessageTimestamp.getDay()];
    const hour = lastMessageTimestamp.getHours().toString().padStart(2, '0');
    const minute = lastMessageTimestamp.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day} ${hour}:${minute}`;


    useEffect(() => {
        const fetchOtherUser = async () => {
            const otherUserId = conversation.user1Id === auth.currentUser.uid
                ? conversation.user2Id
                : conversation.user1Id;
            const userData = await getUserById(otherUserId);
            setOtherUser(userData);
        };

        fetchOtherUser();
    }, [conversation]);

    if (!otherUser) return null;
    return (
        <TouchableOpacity style={styles.outerContainer} onPress={() => onPress(conversation)}>
            <Image source={{ uri: otherUser.image }} style={[styles.profileImage, styles.imageContainer]} />

            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.nameText}>{otherUser.name}</Text>
                </View>
                <View>
                    <Text style={styles.messageText}>{conversation.lastMessage} - {formattedDate}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ConversationTemplate