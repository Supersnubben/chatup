import { Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'

const LogoutButton = ({ onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                style={[styles.logout, style]}
                source={require('/home/robin/repos/chatup/images/logout.png')} />
        </TouchableOpacity>
    )
}

export default LogoutButton