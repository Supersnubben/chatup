import { Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import React from 'react'

const BackButton = ({ onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={require('/home/robin/repos/chatup/images/backbutton_primary.png')}
                style={[styles.backButton, style]} />
        </TouchableOpacity>
    )
}

export default BackButton;