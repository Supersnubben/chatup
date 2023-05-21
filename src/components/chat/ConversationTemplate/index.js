import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import StatusCircle from '../../StatusCircle';
import styles from './styles'
import getUserById from '../../../utils/getUserById'
import { auth } from '../../../utils/firebase'

const ConversationTemplate = ({ conversation, onPress }) => {
    const [otherUser, setOtherUser] = useState(null);

    const lastMessageTimestamp = conversation.createdAt ? conversation.createdAt.toDate() : null;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const dayIndex = lastMessageTimestamp?.getDay();
    const day = dayIndex !== undefined ? days[dayIndex] : '';
    const hour = (lastMessageTimestamp?.getHours() ?? '').toString().padStart(2, '0');
    const minute = (lastMessageTimestamp?.getMinutes() ?? '').toString().padStart(2, '0');

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

    const lastSenderId = conversation.lastSenderId;
    const name = otherUser.name;
    const firstName = name.split(' ')[0];
    const messagePrefix = lastSenderId === auth.currentUser.uid ? 'You: ' : `${firstName}: `;

    if (!otherUser) return null;
    return (
        <TouchableOpacity style={styles.outerContainer} onPress={() => onPress(conversation)}>

            <View style={styles.imageContainer}>
                <Image source={{ uri: otherUser.image }} style={styles.profileImage} />
                <View style={styles.statusCircleContainer}>
                    <StatusCircle active={otherUser?.active} />
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.nameText}>{otherUser.name}</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text>{messagePrefix}</Text>
                    <Text style={styles.messageText}>{conversation.lastMessage}</Text>
                    <Text style={styles.dateText}> -   {formattedDate}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ConversationTemplate