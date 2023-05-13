import { Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import getUserById from '../../../utils/getUserById'
import { auth } from '../../../utils/firebase'

const ConversationTemplate = ({ conversation }) => {
    const [otherUser, setOtherUser] = useState(null);

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
        <View style={styles.outerContainer}>
            <Image source={{ uri: otherUser.image }} style={[styles.profileImage, styles.imageContainer]} />

            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.nameText}>{otherUser.name}</Text>
                </View>
                <View>
                    <Text style={styles.messageText}>{conversation.lastMessage} - { }</Text>
                </View>
            </View>

        </View>
    )
}

export default ConversationTemplate